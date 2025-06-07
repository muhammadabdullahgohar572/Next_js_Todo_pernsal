import { ConnectDB } from "@/app/Helper/db"
import { usersTask } from "@/app/model/TaskModel";
import { NextResponse } from "next/server"


export const POST=async(required)=>{

    try {
           await ConnectDB();
           
           const {tittle,content,Date,status,UserId}=await required.json();

           const Taskget=new usersTask({
            tittle,
            content,
            Date,
            status,
            UserId
           })
              

           const Tasksave=await Taskget.save();

           return NextResponse.json(Tasksave,{
                message:"Task sucessfully Save",

           })
           
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:error,
            status:202
        })
    }

}