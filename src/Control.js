import React, { useState } from 'react'

export default function Control() {
    const [name,setName]=useState();
    const [mob,setMob]=useState();
    
    function submitForm(e){
        e.preventDefault()
        console.log(name,mob)
    }
  return (
    <div>
      {/* this is controlled comp example */}
      <form onSubmit={submitForm}>
            <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
            <input type="number" placeholder="Enter Mob" onChange={(e)=>setMob(e.target.value)}/>
            <button >OK!!!</button>
      </form>
    </div>
  )
}
