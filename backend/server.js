require('dotenv').config()
const utils = require('./utils.js')
const mysql = require("mysql")
const bp = require('body-parser')
const cors = require("cors")
var LocalStrategy = require('passport-local').Strategy;
var passport = require('passport')
var bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');


const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;




var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080;

app.listen(port);

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))


app.use(
    cors({
        origin: "http://localhost:3000", // <-- location of the react app were connecting to
        credentials: true,
    }))


app.use(passport.initialize());



const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "root",
    database: "firefly"

})

// used to serialize the user for the session
passport.serializeUser(function (user, done) {

    if (user.provider)
        done(null, user.email);
    else
        done(null, user.username);
});

// used to deserialize the user
passport.deserializeUser(function (username, done) {

    db.query("select * from users where username = \"" + username + "\"", function (err, rows) {
        done(err, rows[0]);
    });
});

passport.use(
    new JWTstrategy(
        {
            secretOrKey: process.env.JWT_SECRET,
            jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('Bearer'),
            passReqToCallback: true
        },
        async (req, token, done) => {
            try {
                req.user = token.user
                return done(null, token.user);
            } catch (error) {
                done(error);
            }
        }
    )
);



app.get("/tasks", passport.authenticate('jwt', { session: false }), utils.isUserType("Volunteer"), (req, res) => {
    db.query('SELECT * FROM task', (err, rows) => {
        if (err) throw err;
        res.send(rows)
    })
});

app.post("/addTask",  passport.authenticate('jwt', { session: false }), utils.isUserType('VolunteerOrg'),  (req, res) => {
    db.query("Insert into task (taskName, taskDescription) values ('" + req.body.taskName + "','" + req.body.taskDescription + "')", (err, result) => {
        if (err) throw err;
        res.send("1 task added.")
    })
});

app.post('/register', (req, res, next) => {
    passport.authenticate('local-signup', function (err, user, info) {
        if (!user) { res.status(400).json({ error: info.message }) }
        else {
            res.send("inserted")
        }
    }
    )(req, res, next)
});

app.post('/login', function (req, res, next) {
    passport.authenticate('local-login', function (err, user, info) {
        if (!user) { res.status(401).json({ error: info.message }) }
        else {
            res.json({
                token: info.token
            })
        }
    })(req, res, next);
});

passport.use(
    'local-signup',
    new LocalStrategy({
        username: 'username',
        password: 'password',
        passReqToCallback: true
    },
        function (req, username, password, done) {

            db.query("SELECT * FROM users WHERE username = ?", [username], async function (err, rows) {
                if (err)
                    return done(err);

                if (rows.length) {
                    return done(null, false, { message: "Account with this email already exists" });
                } else {
                    // if there is no user with that username
                    // create the user
                    var newUserMysql = {
                        username: username,
                        password: await bcrypt.hash(password, 10),  // use the generateHash function in our user model
                        firstName: req.body.firstName,
                        userType: req.body.userType
                    };
                    var insertQuery = "INSERT INTO users ( username, password, firstName, userType ) values (?,?,?,?)";
                    db.query("Select * from usertypes where userType='" + newUserMysql.userType + "'", function (err, rows) {
                        if (err) throw err
                        if (!rows.length) done(null, false, { message: "invalid userType" })
                        else {
                            db.query(insertQuery, [newUserMysql.username, newUserMysql.password, newUserMysql.firstName, rows[0].id], function (err, rows) {
                                if (err) throw err
                                newUserMysql.id = rows.insertId;
                                return done(null, newUserMysql);
                            });
                        }
                    })



                }
            });



        })
);

passport.use(
    'local-login',
    new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        username: 'username',
        password: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
        function (req, username, password, done) { // callback with email and password from our form
            db.query("SELECT * FROM users WHERE username = ?", [username], function (err, rows) {
                if (err)
                    return done(err);
                if (!rows.length) {
                    return done(null, false, { message: "Username incorrect" }); // req.flash is the way to set flashdata using connect-flash
                }

                // if the user is found but the password is wrong
                if (!bcrypt.compareSync(password, rows[0].password))
                    return done(null, false, { message: "Password incorrect" }); // create the loginMessage and save it to session as flashdata

                req.login(
                    rows[0],
                    { session: false },
                    async (error) => {
                        if (error) return done(error)
                        const body = { id: rows[0].userId, username: rows[0].username, userType: rows[0].userType }
                        const token = jwt.sign({ user: body }, process.env.JWT_SECRET);

                        return done(null, rows[0], { token: token })

                    }
                )
            });
        })
);
