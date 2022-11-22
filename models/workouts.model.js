const { Schema, model } = require("mongoose");

const workoutSchema = new Schema(
  {
    title: { type: String, required: true },
    exercises: { type: Object, required: true },
    duration: { type: Number },
  },
  { timestamps: true }
);

module.exports = new model("Workout", workoutSchema);
