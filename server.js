var express= require("express");
var bodyParser= require("body-parser");
var path = require("path");
console.log(__dirname)
var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var friends = require("./app/data/friends");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var PORT = process.env.PORT || 3000;
app.use('/', apiRoutes);
app.use('/', htmlRoutes);
app.listen(PORT, function() {
    console.log("App is listening on PORT " + PORT);
});