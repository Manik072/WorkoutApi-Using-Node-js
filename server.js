require("dotenv").config()
const express = require("express")
const workoutRouter = require('./routes/workout')
const app = express();
const mongoose = require("mongoose")

app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use('/api/workout',workoutRouter)

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to Database")
}).catch((error)=>{
    console.log(error);
})

app.listen(process.env.PORT,()=>{
    console.log("Working at 5000")
})