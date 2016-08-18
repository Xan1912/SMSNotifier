// Including packages required
var express = require("express");
var mysql = require('mysql');

// Making the connection
var connection = mysql.createConnection({
  host           : 'host',
  user           : 'user',
  password       : 'password',
  database       : 'database',
  ssl            : 'Amazon RDS' 
});

// Initializing express instance
var app = express();

var data_array = [];

// Connecting to Database
connection.connect(function(err){
if(!err) {
    console.log("Database is connected.");    // Triggers upon successful connection 
} else {
    console.log(err);   // Triggers if it faces an error
}

});

// Set up server for DB manipulation
app.get("/", function(req,res){
connection.query('SELECT displayName,loginEmail FROM SignedUpParty;', function(err, rows, fields) {
  if(!err){
    for(var row in rows){
      data_array.push({'name' : rows[row].displayName, 'email' : rows[row].loginEmail}); // Make a JSON array of required data
    }
  } else {
    console.log('Error while performing Query.'); // Triggers if there's something wrong in the SQL query
  }

});

connection.end(); // Closes connection

});

app.listen(7263); // Starts server