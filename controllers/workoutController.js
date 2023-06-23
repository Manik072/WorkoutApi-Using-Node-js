const Workout = require("../models/workoutmodel")


const getAllWorkout = async (req, res) => {

    const workout = await Workout.find({}).sort({ createdAt: -1 })

    res.status(200).json(workout)


}



const getSingleWorkout = async (req, res) => {
    const { id } = req.params;
    const workout = await Workout.findById(id)

    res.status(200).json(workout)

}

const createWorkout = async (req, res) => {

    const { title, reps, load } = req.body;

    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)
    }
    catch (error) {

        res.status(400).json({ error: error.message })
    }

    console.log(req.body)


}


const deleteWorkout =  async(req, res) => {
   
    const {id} = req.params;

    const workout = await Workout.findOneAndDelete({_id:id})

    res.status(200).json(workout)

    

}

const updateWorkout = async (req, res) => {
    const {id} = req.params;

       const workout = await Workout.findOneAndUpdate({_id:id},{
        ...req.body
       })

       res.status(200).json(workout)
}


module.exports = {getAllWorkout,getSingleWorkout,createWorkout,deleteWorkout,updateWorkout}



