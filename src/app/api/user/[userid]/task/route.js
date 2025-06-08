import { usersTask } from "@/app/model/TaskModel"
import { NextResponse } from "next/server"

export const GET=async(request,{params})=>{
  
  try {
       const {userId}=await params
      const tasks=await usersTask.find({
        userId:userId
      })       
      return NextResponse.json(tasks)
     } catch (error) {
      return NextResponse.json(error)
      
     }
}