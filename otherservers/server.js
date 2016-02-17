'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello world from node\n');
});

app.get('/count/*', function(req, res){
    var param = req.params[0]
    res.send('length is:' + param.length)
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);