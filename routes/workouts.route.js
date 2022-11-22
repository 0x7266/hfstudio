const {
  getWorkouts,
  createWorkout,
  editWorkout,
  deleteWorkout,
} = require("../controllers/workouts.controller.js");

const { Router } = require("express");
const router = Router();

router.get("/", getWorkouts);
router.post("/", createWorkout);
router.patch("/:id", editWorkout);
router.delete("/:id", deleteWorkout);

module.exports = router;
