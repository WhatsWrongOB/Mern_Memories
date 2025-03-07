import mongoose from "mongoose";


export const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
    } catch (error) {
        console.log(`Database connection failed ${error}`)
        process.exit(0);
    }
}
