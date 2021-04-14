const express = require('express');
const path = require('path');
const emailRoute = require('./routes/email');
require('./routes/email')

const app = express(),
      bodyParser = require("body-parser");
      port = 80;

// make the left side stuff centered (portrait and bio) 
// so theres less white space


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public')));

app.use('/sendEmail', emailRoute);

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port: ${port}`);
});