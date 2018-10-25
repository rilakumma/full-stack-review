const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION).then()

const port = 4000;
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port} ☁️ ☁️ ☁️ ☁️ ☁️`);
})