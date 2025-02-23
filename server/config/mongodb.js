import mongoose from "mongoose"


const mongoDbUri = process.env.MONGODB_URI

const connectDB = async ()=>{
    mongoose.connection.on("connected",()=>{
        console.log(("database connection successfull"))
    })
    console.log(mongoDbUri,"hello")
    await mongoose.connect(`${mongoDbUri}/travelManagement`)
}

export default connectDB;