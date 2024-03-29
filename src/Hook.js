import React, { useState } from 'react'

export default function Hook() {
    const [name,setName]=useState("oo... jinne mera dil luteyaa....")
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={()=>setName("ohhoooo!!!!")}>Ok!!!</button>
    </div>
  )
}
