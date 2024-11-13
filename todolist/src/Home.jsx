import { useEffect, useState } from "react"
import Create from "./Create"
import axios from "axios"

function Home(){
     const [todos,setTodos] =useState([])
     useEffect(()=>{
        axios.get("http://localhost:3001/get")
        .then(result=>setTodos(result.data))
        .catch(err=> console.log(err))
     },[])

    return(
        <>
        <h1>Tdo List</h1>
        <Create/>
        {   todos.length === 0 ?
             <div>
                <h2>No records</h2>
             </div>
             :
            todos.map(todo=>(
                <div>
                    {todo}
                </div>
            ))
        }
        </>
    )
}

export default Home