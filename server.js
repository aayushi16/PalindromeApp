var express = require('express');
var cors = require('cors');
var path = require('path');
var app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, '')));
app.get('/',(req,res) => {
    res.sendFile( __dirname+'/index.html');
})

app.listen(3000, function () {
  console.log('Server listening on port 3000!')
})