const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./router");
const mongoose = require("mongoose");
const cors = require("cors");

//DB setup
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hikeTracker");

//create instance of express
const app = express();

//App setup
//middleware - any incoming request passed into middleware
//morgan is logging framework
app.use(morgan("combined"));
//bodyParser parses incoming requests - specifically JSON - of all types
app.use(bodyParser.json({ type: "*/*" }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//pass app into router function
router(app);

// Connect to the Mongo DB
const CONNECTION_URL =
  "mongodb+srv://davidsjg:Colorado23@reduxapp.5jyvq.mongodb.net/hikeTracker?retryWrites=true&w=majority";

//Server setup
const PORT = process.env.PORT || 3001;
//create an HTTP server that knows how to receive requests, and anything that comes in, forward it on to express application
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
