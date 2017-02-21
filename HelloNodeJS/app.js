const express = require('express');
const app = express();
const HelloController = require('./controllers/HelloController');
const authFilter = require('./middleware/auth');
//const getHelloView = (req, res) => {
  //res.send('Hello');
  //res.json({message: 'Hello'});
//};

app.get('/hello', authFilter.isAuthenticated, HelloController.helloView);

app.get('/doLogin', (req, res) => {
  req.user = {username: 'lucduong'};
  res.redirect('/hello');
});

app.get('/login', (req, res) => {
  res.send('This is login page');
});


app.listen('8080', () => {
  console.log(`App was started at port 8080`);  
});


