// Require all the packages
const path = require("path");
const express = require("express");
const app = express();

app.use(express.static("public"));
// html route to display the index file
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"../public/index.html"))
})
// html route to display the exercise file
app.get("/exercise", (req,res) => {
    res.sendFile(path.join(__dirname,"../public/exercise.html"))
})
// html route to display the stats file
app.get("/stats", (req,res) => {
    res.sendFile(path.join(__dirname,"../public/stats.html"))
})
module.exports = app;