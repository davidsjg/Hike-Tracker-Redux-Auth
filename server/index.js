const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");

//create instance of express
const app = express();

//App setup
//middleware - any incoming request passed into middleware
//morgan is logging framework
app.use(morgan("combined"));
//bodyParser parses incoming requests - specifically JSON - of all types
app.use(bodyParser.json({ type: "*/" }));

//Server setup
const port = process.env.PORT || 3090;
//create an HTTP server that knows how to receive requests, and anything that comes in, forward it on to express application
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on: ", port);
