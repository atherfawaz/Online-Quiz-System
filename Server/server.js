const express = require('express');
var cors = require('cors');


var app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());



app.post('/login-authentication', (req, response) => {  
    console.log(req.body.username);
    console.log(req.body.password);
    console.log(req.body.user_type);
    response.status(200).json({'msg': "successful"});
})

app.post('/register-user', (req, response) => {  
    console.log(req.body.username);
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body.userType);
    response.status(200).json({'msg': "successful"});
})

app.post('/get-courses', (req, response) => {  
    console.log(req.body.username);
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body.userType);
    response.status(200).json({'msg': "successful"});
})

//server start notification
var server = app.listen(8000, () => {
    console.log("Server is listnening on the port 8000");
});