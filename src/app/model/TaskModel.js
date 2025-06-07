import mongoose, { Schema } from "mongoose";

const TaskModel=new Schema({
    tittle:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        required:true,
        default:Date.now()
    },
    status:{
        type:String,
        enum: ["pending", "completed"],
        default: "pending",
    },
    UserId:{
        type:mongoose.ObjectId,
        required:true
    }

})

const usersTask=mongoose.model.UserTasks||mongoose.model("UsersTasks",TaskModel)
export {usersTask}