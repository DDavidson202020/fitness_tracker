const path = require("path");
const express = require("express");
const app = express();

app.use(express.static("public"));
// html route to display the index file
app.get("/", (req,res) => {
    res.sendFile(path.join(_dirname,"./index.html"))
})
// html route to display the exercise file
app.get("/exercise", (req,res) => {
    res.sendFile(path.join(_dirname,"./exercise.html"))
})
// html route to display the stats file
app.get("/stats", (req,res) => {
    res.sendFile(path.join(_dirname,"./stats.html"))
})