import axios from "axios";

export const api=axios.create({
    baseURL:"http://localhost:8080"
})

export async function addRoom(photo,roomType,roomPrice){
    const formData=new FormData();
    formData.append("photo",photo)
    formData.append("rooType",roomType)
    formData.append("roomPrice",roomPrice)

    const response=api.response("/rooms/AddNewRoom",formData)
    if(response.status===201){
        return true
    }
    else{
        return false
    }
}

export async function getRoomTypes(){
    try{
        const response=await api.get("rooms/roomTypes")
        return response.data
    }
    catch(error){

        throw new Error("Error fetching in roomTypes")
    }
}