import React, {useState} from "react"
import axios from "axios"


function Create(){
    const [task,setTask]=useState()
    const handleAdd =()=>{
        axios.post('http://localhost:3001/add',{})
        .then(result=> console.log(result)
        .catch(err=> console.log(err))
    )
    }
    return(
        <>
        <input type="text" placeholder="Enter Task" onChange={(e)=>setTask(e.target.value)}/>
        <button type="button" onClick={handleAdd}>Add</button>
        
        </>
    )
}

export default Create