const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
                type: {

                    type: String,
                    trim: true,
                    require: "Enter an exercise type"
                },
                name: {
                    type: String,
                    trim: true,
                    require: "Enter an exercise name"
                },
                duration: {
                    type: Number,
                    require: "Enter duration of exercise"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            },
        
        ]
    });

    const Workout = mongoose.model("workout", WorkoutSchema);

    module.exports = Workout;