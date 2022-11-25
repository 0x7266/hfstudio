require("dotenv").config();

const connect = require("./config/db.js");
const express = require("express");
const workoutsRoutes = require("./routes/workouts.route.js");
const userRoutes = require("./routes/user.route.js");

const app = express();
const PORT = process.env.PORT || 3334;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/workouts", workoutsRoutes);
app.use("/api/user", userRoutes);

connect(() =>
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
);
