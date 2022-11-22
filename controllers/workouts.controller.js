const Workout = require("../models/workouts.model.js");

module.exports = {
  getWorkouts: async (req, res) => {
    try {
      const result = await Workout.find();
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  createWorkout: async (req, res) => {
    try {
      const result = await Workout.create(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  editWorkout: async (req, res) => {
    try {
      const result = await Workout.findOneAndUpdate(
        { id: req.params.id },
        req.body
      );
      res.json({ message: "workout edited" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  deleteWorkout: async (req, res) => {
    try {
      const result = await Workout.deleteOne({ id: req.params.id });
      res.json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
