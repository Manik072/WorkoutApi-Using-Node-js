const express = require("express")
const Workout = require("../models/workoutmodel");
const { getAllWorkout, getSingleWorkout, createWorkout, deleteWorkout, updateWorkout } = require("../controllers/workoutController");
const router = express.Router();
require("../controllers/workoutController")

router.get("/", getAllWorkout)

router.get("/:id",  getSingleWorkout)

router.post("/", createWorkout)

router.delete("/:id", deleteWorkout)

router.patch("/:id",updateWorkout)

module.exports = router;