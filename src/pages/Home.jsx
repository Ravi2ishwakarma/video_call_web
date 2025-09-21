import { handlers } from 'browser-router/html5-history/adapter'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    let [input,setInput]=useState("")
    let navigate=useNavigate()
    let handlerJoin=()=>{
        navigate(`/room/${input}`);
    }
   
  return (
    <div id='home'>
    <input type="text" placeholder='Enter Room Id' value={input} onChange={(e)=>setInput(e.target.value)} name="" id="" />
    <button onClick={handlerJoin}>Join Now</button>
    </div>
  )
}
