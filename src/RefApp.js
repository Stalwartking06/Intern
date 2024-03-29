import React, { useRef } from 'react'

export default function RefApp() {
    const nameref=useRef()
    const mobref=useRef()
    function hello(){

        const name=nameref.current.value
        const mob=mobref.current.value
        const add=document.getElementById("add").value
        console.log(name,mob,add)
    }
  return (
    <div>
        <input type="text" placeholder="Enter Name" ref={nameref}/><br/>
         <input type="number" placeholder="Enter Mob" ref={mobref}/><br/>
         <input type="text" placeholder="Enter Address" id='add'/><br/>
         <button onClick={hello}>OKkk...!!!</button>
    </div>
  )
}
