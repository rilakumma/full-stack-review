const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();

const couchController = require('./couch_controller');
const authController = require('./auth_controller');
const userController = require('./user_controller');

const app = express();
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

massive(process.env.CONNECTION).then(database=> {
    app.set('db', database);
}).catch(error => {
    console.log('Error with massive', error);
})

//user controller
app.get('/api/me', userController.getUser);

// auth controller
app.post('/api/logout', authController.logout);
app.get('/auth/callback', authController.handleCallback);

// couch controller
app.get('/api/couches', couchController.getCouches)
app.post('/api/couches', couchController.addCouch);


const port = 4000;
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port} ☁️ ☁️ ☁️ ☁️ ☁️`);
})