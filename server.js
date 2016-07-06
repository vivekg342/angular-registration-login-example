var express = require('express');
var app = express();
app.use('/', express.static('.'));

var PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    var path = require('path');
    res.sendfile(path.resolve(__dirname + '/./index.html'));
});


app.listen(PORT, function () {
    console.log('Example app listening on port ' +  PORT + '!');
});

