//declare variable to use the installed packages
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//EJS
app.use(expressLayouts);
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
//BODY-PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

////////////

//MONGODB DATABASE
const database = require("./services/dbConnection.js");

//ROUTES










app.listen(1485, console.log("Server running on port 1485"));


//const PORT = process.env.PORT || 1485;
//app.listen(PORT, console.log("Server running on port ${PORT}"));




//main file
//.gitignore
///node_modules
//package-lock.json


