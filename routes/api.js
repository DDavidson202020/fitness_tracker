// Require all the packages
const express = require("express");
const mongoose = require("mongoose");

const db = require("../models");
const app = express();
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Route for getting the last workout from database
app.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

// Route for updating exercise
app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
        req.params.id,
        { $push: {exercises: req.body}, $set: {totalDuration: req.body.duration}}, (err, data) => {
            if(err) throw err;
            res.json(data);
            console.log(req.body.duration)
        });
});
// Route for creating exercise
app.post("/api/workouts", ({body},res) => {
    db.Workout.create(body, (err,data) => {
        if (err) throw err;
        res.json(data);
    });
});
// Route for getting the last 7 exercises
app.get("/api/workouts/range", (req,res) => {
    db.Workout.find({}).sort({"day": -1}).limit(7).then((data) => {
        res.json(data);
    }).catch(err => {
        console.log(err)
    });
    
});

module.exports = app;