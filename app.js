var twilio = require('twilio'),
client = twilio('AC1b074d248af772ecc11a6be36eef76f4', '5b5418b45d263972e6e018f93fe3b5d2'),
cronJob = require('cron').CronJob; // Authentication of twilio account

/*var textJob = new cronJob( '32 16 * * *', function(){
  client.sendMessage( { to:'+918697555347', from:'+17652634789', body:'Hello sexy!' }, function( err, data ) {});
},  null, true); // Setting up cron for the sms notification*/

var numbers = ['+918697555347', '+919874550702'];

for( var i = 0; i < numbers.length; i++ ) {
  client.sendMessage( { to:numbers[i], from:'+17652634789', body:'Hello Shonti!.'}, function( err, data ) {});
}

