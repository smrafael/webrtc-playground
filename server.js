var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('public/js'));

app.get('/', function(req, res) {
    res.render('public/index.html');
});

app.listen(3000, function() {
    console.log('INFO: listening on port 3000');
});