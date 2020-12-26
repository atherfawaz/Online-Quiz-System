const express = require('express');
const cors = require('cors');
const CRED = require("./cred");
const mongoose = require("mongoose");
const User = require("./models/User");
const joi = require("joi");
const bcrypt = require('bcrypt');

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

    response.status(200).json({ 'msg': "successful" });
});

app.post('/register-user', async (req, res) => {
    // perform field validaiton
    const schema = joi.object({
        name: joi.string().min(6).max(100).required(),
        email: joi.string().min(5).email().required(),
        password: joi.string().alphanum().min(6).required(),
        type: joi.number().integer().min(0).max(1).required()
    });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ "error": error.details[0].message });

    // check if already exists in database
    const email_exists = await User.findOne({ email: req.body.email });
    if (email_exists) return res.status(400).json({ "error": "email already exists" });

    // encrypt password
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password, salt);

    // save user in db
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashed,
        type: Number(req.body.type),
        classes: []
    });
    try {
        const result = await user.save();
        res.status(200).json({ "msg": "success", "data": result });
    }
    catch (e) {
        console.log(e); res.status(400).json({ "e": error });
    }
});

app.post('/get-courses', (req, response) => {
    console.log(req.body.username);
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body.userType);
    response.status(200).json({ 'msg': "successful" });
});

//server start notification
var server = app.listen(8000, () => {
    console.log("Server is listnening on the port 8000");
});