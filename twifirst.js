// Include express
var app = require('express')();
var http = require('http').Server(app);

// Twilio Credentials
var accountSid = 'AC1b074d248af772ecc11a6be36eef76f4';
var authToken = '5b5418b45d263972e6e018f93fe3b5d2';

// require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

// store the parameters
var toNumber = '+9198745550702';
var fromNumber = '+17652634789';
var bodyText = 'Hello freak!';

// send message
app.get('/testtwilio', function(req, res)
{
    client.sendMessage(
    {
        to: toNumber,
        from: fromNumber,
        body: bodyText
    },  function(err, data)
    {
        if(err)
            console.log(err);
        console.log(data);
    });
});

// Listening app
http.listen(3000, function()
    {
    console.log('listening on port: 3000');
    }
);



