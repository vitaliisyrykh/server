const express = require('express');

const app = express();

app.get('/', (req, res) =>{
  res.send('Hello World')
})
app.post('/', (req, res) =>)

app.listen(3002, ()=>console.log('we start'));