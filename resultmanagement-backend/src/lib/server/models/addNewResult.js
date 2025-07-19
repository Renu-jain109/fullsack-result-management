import mongoose from "mongoose";

const AddNewResultSchema = new mongoose.Schema({
    rollno : {type:String,required: true},
    name : {type:String, required:true},
    dob: {type:String, required:true},
    score: {type:String, required:true}
});

export const Result = mongoose.models.addnewresults || mongoose.model("addnewresults",AddNewResultSchema);

