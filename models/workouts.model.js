const { Schema, model } = require("mongoose");

const workoutSchema = new Schema(
  {
    exercise: { type: String, required: true },
    load: { type: String },
    reps: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = model("Workout", workoutSchema);
