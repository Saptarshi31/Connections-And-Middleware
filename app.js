const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;
const exphbs  = require('express-handlebars');
const mysql = require('mysql');

let handlebars = require('handlebars');
const extend = require('handlebars-extend-block');

handlebars = extend(handlebars);

// App
const app = express();

// Mysql DB
const db = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: '',
	database: 'nodesql'
});

// Body parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// static files
app.use(express.static('public'));

// HandleBars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Server
app.listen(port, () => {
	console.log('Server Started on Port ' + port);
});
