const express = require('express');
const path = require('path');
const emailRoutes = require('./routes/email');

const app = express()
app.use(express.json())

// make the left side stuff centered (portrait and bio) 
// so theres less white space

let myArray = [];

app.use(express.static(path.join(__dirname, './public')));

app.get('/sendEmail', emailRoutes)

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});
app.get('/testing', (req,res) => {
  res.json({testing: 'testinggdfgsdg'})
});
app.post('/testPostRoute', (req,res) => {
  try {
  myArray.append(req.name)
  res.send({message: "success"})
  } catch(err) {
    console.log(err)
    res.send({message: "error"})
  }
})
app.listen(3000, () => {
    console.log(`Server listening on the port: ${3000}`);
});

// asdjasui9fhsdyuilofhsdyuif TESATINGF PLEASE WORK

// asdjasui9fhsdyuilofhsdyuif TESATINGF PLEASE WORK

// asdjasui9fhsdyuilofhsdyuif TESATINGF PLEASE WORK
// asdjasui9fhsdyuilofhsdyuif TESATINGF PLEASE WORK
// asdjasui9fhsdyuilofhsdyuif TESATINGF PLEASE WORK

// asdjasui9fhsdyuilofhsdyuif TESATINGF PLEASE WORK

// asdjasui9fhsdyuilofhsdyuif TESATINGF PLEASE WORK

// asdjasui9fhsdyuilofhsdyuif TESATINGF PLEASE WORK

// asdjasui9fhsdyuilofhsdyuif TESATINGF PLEASE WORK

// asdjasui9fhsdyuilofhsdyuif TESATINGF PLEASE WORK

// asdjasui9fhsdyuilofhsdyuif TESATINGF PLEASE WORK

// asdjasui9fhsdyuilofhsdyuif TESATINGF PLEASE WORK

// asdjasui9fhsdyuilofhsdyuif TESATINGF PLEASE WORK


// asdjasui9fhsdyuilofhsdyuif TESATINGF PLEASE WORK
// asdjasui9fhsdyuilofhsdyuif TESATINGF PLEASE WORK

// asdjasui9fhsdyuilofhsdyuif TESATINGF PLEASE WORK
