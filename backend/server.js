const mysql = require("mysql")
const bp = require('body-parser')
const cors = require("cors")




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


const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "root",
    database: "firefly"

})


app.get("/tasks", (req, res) => {
    db.query('SELECT * FROM task', (err,rows) => {
        if(err) throw err;
        res.send(rows)
      })
});

app.post("/addTask", (req,res)=>{
    db.query("Insert into task (taskName, taskDescription) values ('"+req.body.taskName+ "','"+req.body.taskDescription+"')", (err,result) => {
        if(err) throw err;
        res.send("1 task added.")
      })
});

