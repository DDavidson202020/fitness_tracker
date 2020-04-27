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
            required: "Duration is required"
        },
        weight: {
            type: Number,
            required: "Weight is required"
        },
        reps: {
            type: Number,
            required: "Required"
        },
        sets: {
            type: Number,
            required: "Required"
        },
        distance: {
            type: Number,
            required: "Required"
        }
    }]
})

const Exercise = mongoose.model("Exercise", ExerciseSchema);
module.exports = Exercise;