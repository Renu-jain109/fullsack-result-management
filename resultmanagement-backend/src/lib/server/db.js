import mongoose from 'mongoose';
import { env } from '$env/dynamic/private';
export const connectDB = async () => {
    if (mongoose.connection.readyState !==1) {
        await mongoose.connect(env.MONGO_URI);
        console.log('MongoDB Connection');
        
    }
};