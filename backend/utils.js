const userTypes = {
    1: 'Volunteer',
    2: 'VolunteerOrg'
}

const isUserType = (checkFor) => {
    return (req, res, next) => {
        console.log(checkFor)
        if (checkFor === userTypes[req.user.userType])
            next();
        else
            return res.status(403).json({
                error: "Access denied"
            });
    }
}

module.exports = {
    isUserType
}

