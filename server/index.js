const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();
const couchController = require('./couch_controller');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION).then(database=> {
    app.set('db', database);
}).catch(error => {
    console.log('Error with massive', error);
})

app.get('/api/couches', couchController.getCouches)
app.post('api/couches', couchController.addCouch);


const port = 4000;
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port} ☁️ ☁️ ☁️ ☁️ ☁️`);
})