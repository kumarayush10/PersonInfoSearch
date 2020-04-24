var wikiParser = require('wiki-infobox-parser');
var express = require('express');
var bodyParser = require('body-parser');
const { fetchSearchInfoBoxes } = require('wiki-infoboxes');

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var app = express();

app.listen(3000, function(){
    console.log('App is listening at port 3000');
});

app.get('/', function(req, res){
    res.render('home.ejs');
});

app.post('/search', urlencodedParser, function (req, res) {
    //fetchSearchInfoBoxes('Lionel Messi').then(x => console.log(x));
    console.log(req.body.name);
    var query = req.body.name;
    console.log(query);
    wikiParser(query, function(err, result) {
    if (err) {
        console.error(err.message);
    } else {
        console.log(result);
        //var resultString = JSON.stringify(result);
        console.log('Sending Response');
        res.send(result);
        return;
    }});
});
