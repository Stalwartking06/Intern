import React, { useState } from 'react'

export default function () {
    const  [name, setName] = useState("Ram")
    const [Ram,setRam]=useState("Ram")
    function hello(){
        setName("Lakhan")
        setRam("Siya Ram")
    }
  return (
    <div>
      <h1>My name is {name}</h1>
      <h1>{Ram}</h1>

      <button onClick={hello}>OK</button>
    </div>
  )
}
