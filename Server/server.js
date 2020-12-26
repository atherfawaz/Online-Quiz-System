const express = require('express');
const cors = require('cors');
const CRED = require("./cred");
const mongoose = require("mongoose");
const User = require("./models/User");

// necessary middleware
var app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// establishing connection to database
mongoose.connect(CRED.DB, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("connected to db")
    }
});

// endpoints
app.post('/login-authentication', (req, response) => {
    console.log(req.body.username);
    console.log(req.body.password);
    console.log(req.body.user_type);
    response.status(200).json({ 'msg': "successful" });
})

app.post('/register-user', (req, response) => {
    console.log(req.body.username);
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body.userType);
    const user = new User({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        type: Number(req.body.userType),
        classes: []
    });
    user.save()
        .then((data) => {
            console.log(data);
            response.status(200).json({ "msg": "success", "data": data });
        })
        .catch((e) => {
            console.log(e); response.status(400).json({ "error": e });
        });

})

app.post('/get-courses', (req, response) => {
    console.log(req.body.username);
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body.userType);
    response.status(200).json({ 'msg': "successful" });
})

//server start notification
var server = app.listen(8000, () => {
    console.log("Server is listnening on the port 8000");
});