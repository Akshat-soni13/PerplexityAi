import mongoose, { connect }  from "mongoose";

async function connectToDb()
{
   await  mongoose.connect(process.env.MONGO_URI)
    console.log("Database COnnected ")

}   

export default connectToDb