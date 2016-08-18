var express = require("express");
var mysql = require('mysql');

// Initializing express instance
var app = express();

// Making the connection
var connection = mysql.createConnection({
  host           : 'host/Amazon server',
  user           : 'user',
  password       : 'password',
  database       : 'Database',
  ssl            : 'Amazon RDS' 
});

var data_array = [];

// Connecting to Database
connection.connect(function(err){
if(!err) {
    console.log("Database is connected.");    // Triggers upon successful connection 
} else {
    console.log(err);   // Triggers if it faces an error
}
});

connection.query('SELECT displayName,loginEmail FROM SignedUpParty;', function(err, rows, fields) {
  if(!err){
    for(var row in rows){
      data_array.push({'name' : rows[row].displayName, 'email' : rows[row].loginEmail}); // Make a JSON array of required data
    }
  } else {
    console.log('Error while performing Query.'); // Triggers if there's something wrong in the SQL query
  }
  
/*console.log(data_array[0]['email']);*/
connection.end(); // Closes connection

// Twilio Credentials
var accountSid = 'twilio account id';
var authToken = 'twilio account token';

// require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

// store the parameters
var toNumber = 'to';
var fromNumber = 'from(default number provided by Twilio';
var bodyText = "Hello " + data_array[4]["name"] + ". Your mail ID is " + data_array[4]["email"];

// send message
app.get('/', function(req, res)
{
    client.sendMessage(
    {
        to: toNumber,
        from: fromNumber,
        body: bodyText
    },  
    function(err, data)
    {
        if(err)
            console.log(err);
        console.log(data);
    });
});
});

app.listen(7263); // Starts server



