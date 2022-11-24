const {
  getWorkouts,
  getWorkout,
  createWorkout,
  editWorkout,
  deleteWorkout,
} = require("../controllers/workouts.controller.js");

const { Router } = require("express");
const router = Router();

router.get("/", getWorkouts);
router.get("/:id", getWorkout);
router.post("/", createWorkout);
router.patch("/:id", editWorkout);
router.delete("/:id", deleteWorkout);

module.exports = router;
