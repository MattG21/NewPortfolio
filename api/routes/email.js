const express = require('express');
const path = require('path');
const app = express();
const mandrill = require('node-mandrill')('<your API Key>'); 

app.get('/sendEmail', (req,res) => {
  mandrill('/messages/send', {
      message: {
          to: [{email: 'mgnon@bu.edu', name: 'Matthew Gagnon'}],
          from_email: 'mgnon@bu.edu',
          subject: "Hey, what's up?",
          text: "Hello, I sent this message using mandrill."
      }
  }, function(error, response)
  {
      //uh oh, there was an error
      if (error) {
        console.log( JSON.stringify(error) );
      }
      //everything's good, lets see what mandrill said
      else { 
        console.log(response)
      }
  });

  // this will not work
})


module.exports = app;