//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {

  var today = new Date();
  var currentDay = today.getDay();
  var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var day = weekday[currentDay];

  res.render("list", {kindOfDay: day});

});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
