import { HttpasAxios } from "../Helper/Httpsreponse"

export const AddTask=async(taskData)=>{
    const reponse=await HttpasAxios.post("/api/Tasks",taskData)
    return reponse
}