
var express = require("express");
var app = express();
var path = require("path");
 var cors = require("cors");

var http = require("http").Server(app);

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../dist/workshop4tut")));

// require("../server/routes/login-routes.js")(app, path);

app.listen(3000, "127.0.0.1", function() {
  var date = new Date();
  var hours = date.getHours();
  var min = date.getMinutes();
  console.log("My Server is starting at: " + hours + ":" + min);
});

require("./routes/authRoute.js")(app, path);