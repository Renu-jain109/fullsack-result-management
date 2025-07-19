import mongoose from 'mongoose';
import { env } from '$env/dynamic/private';
export const connectDB = async () => {
    if (mongoose.connection.readyState !==1) {
        await mongoose.connect("mongodb://jainwithrenu243:0YK5Rx7HkZmtNYAn@renu-jain-shard-00-00.c2kkp.mongodb.net:27017,renu-jain-shard-00-01.c2kkp.mongodb.net:27017,renu-jain-shard-00-02.c2kkp.mongodb.net:27017/result_management?ssl=true&replicaSet=atlas-10utco-shard-0&authSource=admin&retryWrites=true&w=majority");
        // await mongoose.connect(env.MONGO_URI);
        console.log('MongoDB Connection');
        
    }
};