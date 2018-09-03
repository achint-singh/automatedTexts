// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

var schedule = require('node-schedule');
var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(0, 6)];
rule.hour = 9;
rule.minute = 0;

schedule.scheduleJob(rule, function(){
  // need client messages to be called here
  client.messages
  .create({
     body: `${randomMessage()}`,
     from: proccess.env.SENDER,
     to: process.env.RECEIVER
   })
  .then(message => console.log(message.sid))
  .done();
});

function randomMessage() {
  var messages = [
      'Good morning!', 
      'Have a nice day!', 
      'I hope you have a good day!', 
      'How is your morning going?',
      'What are you up to today?',
      'How are you doing today?' 
    ];

  var randomNum = Math.floor(Math.random()*messages.length);
  return messages[randomNum];
}
