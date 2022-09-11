const express = require('express');
const port = process.env.PORT || 3000

const bodyParser = require('body-parser');
const app = express();
const { json } = require('body-parser');


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

//default GET request
app.get(['/', '/health'], function (req, res) {
  res.send('stackoverflow clone is up');


});



let users = require('./controllers/users');
app.use('/users', users);

let questions = require('./controllers/questions');
app.use('/questions', questions);





app.listen(port, async function () {






  console.log(`stackoverflow clone is up ${process.env.NODE_ENV}`);









});