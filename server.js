// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  var obj = {
    "ipaddress": null,
    "language": null,
    "software": null,
  }
  obj["ipaddress"] = request.headers["x-forwarded-for"].split(",")[0];
  obj["language"] = request.headers["accept-language"].split(",")[0];
  obj["software"] = request.headers["user-agent"].replace(")", "(").split("(")[1];
  //response.send(request.headers["user-agent"].replace(")", "(").split("(")[1]);
  response.json(obj);
  response.end();
});





// Simple in-memory store for now

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
