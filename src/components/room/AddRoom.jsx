import { useState } from "react"
import { addRoom } from "../utils/ApiFunction"

export default function AddRoom() {

    const [newRoom,setNewroom]=useState({
        photo:null,
        roomType:"",
        roomPrice:""
    })
    const [imagePreview,setImagePreview]=useState("")
    const [successMessage,setSuccessMessage]=useState("")
    const [errorMessage,setErrorMessage]=useState("")

    const handleRoomInputChange=(e)=>{
        const name=e.target.name
        let value=e.target.value

        if(name==="roomPrice"){
            if(!isNaN(value)){
                value.parseInt(value)
            }else{
                value=""
            }
        }
        setNewroom({...newRoom,[name]:value})

    }

    const handleImageChange=(e)=>{
        const selectedImage=e.target.files[0];
        setNewroom({...newRoom,photo:selectedImage})
        setImagePreview(URL.createObjectURL(selectedImage))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
                const success=await AddRoom(newRoom.photo,newRoom.roomType,newRoom.roomPrice)
                if(success !== undefined)
                {
                    setSuccessMessage("A new room added")
                    setNewroom({
                        photo:null,
                        roomType:"",
                        roomPrice:""
                    })
                    setImagePreview("")
                    setErrorMessage("")
                }
                else{
                    setErrorMessage("Error in adding room")
                }
        }
        catch(error){
            setErrorMessage(error.errorMessage)
        }
    }

  return (
    <div>
      
    </div>
  )
}
