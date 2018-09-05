var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var port = process.env.PORT || 8080;


var app = express();


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var router = require('./controllers/burgers_controller.js');

app.use('/', router);


app.listen(port, function () {
  console.log("App listening on PORT " + port);
});
