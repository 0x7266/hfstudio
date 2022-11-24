const Workout = require("../models/workouts.model.js");

module.exports = {
  getWorkouts: async (req, res) => {
    try {
      const result = await Workout.find();
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  getWorkout: async (req, res) => {
    try {
      const result = await Workout.findById(req.params.id);
      if (!result) {
        res.status(404).json({ error: "No such workout" });
      }
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  createWorkout: async (req, res) => {
    // let emptyFields = [];

    // if (!title) {
    //   emptyFields.push("title");
    // }
    // if (!load) {
    //   emptyFields.push("load");
    // }
    // if (!reps) {
    //   emptyFields.push("reps");
    // }

    // if (emptyFields.length > 0) {
    //   return res.status(400).json({ error: "Please fill in all fields" });
    // }

    try {
      const result = await Workout.create(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  editWorkout: async (req, res) => {
    try {
      const result = await Workout.findByIdAndUpdate(
        { _id: req.params.id },
        req.body
      );
      res.json({ message: "workout edited" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  deleteWorkout: async (req, res) => {
    try {
      const result = await Workout.findByIdAndDelete({ _id: req.params.id });
      if (!result) {
        res.status(404).json({ error: "No such workout" });
      }
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
