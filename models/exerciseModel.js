// Require the mongoose package
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create the Exercise model for mongo database
const ExerciseSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Type of exercise is required"
        },
        name: {
            type: String,
            trim: true,
            required: "Name is required"
        },
        duration: {
            type: Number,
            required: true
        },
        weight: {
            type: Number,
            required: true
        },
        reps: {
            type: Number,
            required: true
        },
        sets: {
            type: Number,
            required: true
        },
        distance: {
            type: Number,
            required: true
        }
    }]
})

const Exercise = mongoose.model("Exercise", ExerciseSchema);
module.exports = Exercise;