var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var session = require("express-session");
var mysql = require("mysql");

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({
    secret: '@#@$MYSIGN#@$#$',
    resave: false,
    saveUninitialized: true
}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "package.json",
    database : "vue_todo_cli"
});

con.connect(function(err){
    if(err) throw err;
    console.log("Database Connect");
});

app.listen(4444, () => {
    console.log("Example app listening on port 4444!");
});

var todoList = require('./route/todoList')(app, con);
var addTodo = require('./route/addTodo')(app, con);