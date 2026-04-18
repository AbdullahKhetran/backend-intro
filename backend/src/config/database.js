import mongoose from "mongoose";
// mongoose is used to talk to mongodb

const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`\n MongoDB connected \n ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB connection failed", error)
        process.exit(1)

    }
}

export default connectDB;
