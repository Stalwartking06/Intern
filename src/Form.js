import React, { useState } from 'react'

export default function Form() {
    const [name,setName]=useState();
    const [age,setAge]=useState();
    const [country,setCountry]=useState();

    function submitForm(e){
        e.preventDefault()
        console.log(name,age,country)
    }
    return (
    <div>
        <form onSubmit={submitForm}>
        <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/><br/>
        <input type="number" placeholder='Enter age'onChange={(e)=>setAge(e.target.value)}/><br/>
        Select Country <br/>
        <select onChange={(e)=>setCountry(e.target.value)}>
            <option >India</option>
            <option >China</option>
            <option >US</option>
            <option >Russian</option>
        </select><br/>
        <button >Submit</button>
        </form>
        <h3>{name}</h3>
            
    </div>
  )
}
