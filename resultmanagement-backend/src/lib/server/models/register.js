import mongoose from "mongoose";

const RegistrationSchema = new mongoose.Schema({
    userName : {type:String,required:true},
    email: {type:String,required:true},
    password: {type:String,required:true},
    confirmPassword: {type:String,required:true},
    role: {type:String,required:true}
});

export const User = mongoose.models.registerusers || mongoose.model('registerusers',RegistrationSchema );

