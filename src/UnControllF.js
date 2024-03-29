import React, { useRef } from 'react'

export default function UnControllF() {
    const inputref=useRef()
    const betaref=useRef()

    function hello(){
        inputref.current.value="my name is Ram!";
        inputref.current.style.color="red";
        inputref.current.style.backgroundColor="aqua";

        
        betaref.current.value="My name is Lakhan!";
        betaref.current.style.color="blue";
        betaref.current.style.backgroundColor="green";
        // console.log(inputref);
        // console.log(betaref);
    }
  return (
    <div>
       <input type="text" placeholder="Enter Name" ref={inputref}></input>
        <button onClick={()=>hello()}>ok!</button>
        <input type="text" placeholder="Enter Name" ref={betaref}></input>

    </div>
  )
}
