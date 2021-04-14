const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 80;

app.post('/sendEmail', (req,res) => {
  console.log("Test send email")
})

module.exports = app;