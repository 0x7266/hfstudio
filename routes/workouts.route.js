const {
  getWorkouts,
  getWorkout,
  createWorkout,
  editWorkout,
  deleteWorkout,
} = require("../controllers/workouts.controller.js");
const requireAuth = require("../middlewares/requireAuth.js");

const { Router } = require("express");
const router = Router();
//require auth for all workout routes
router.use(requireAuth);

router.get("/", getWorkouts);
router.get("/:id", getWorkout);
router.post("/", createWorkout);
router.patch("/:id", editWorkout);
router.delete("/:id", deleteWorkout);

module.exports = router;
