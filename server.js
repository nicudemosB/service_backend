const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = mongoose.connection;
require("dotenv").config();


// Connect to Mongo
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI)

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.get("/", (req, res) => {
    res.send("hello world");
});
app.listen(PORT, () => console.log("Listening on port:", PORT));
