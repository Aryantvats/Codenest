import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); 

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log('DB connected');
    } catch (error) {
        console.error('DB connection error:', error);
    }
}

export default connectDB;

