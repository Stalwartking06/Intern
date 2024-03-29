import React from 'react'

export default function FunComp() {
  return (
    <div>
      <h1>This IS function Component...!!</h1>
      <Hello/>
      <Aksh/>
      <h1>Ganpati Bappa Moriya</h1>
    </div>
  )
}

 function Hello(){
  return(
    <h1>Ram Ram Saab.!!!</h1>
  )
 }

 const Aksh=()=>{
  return(
    <h1>Joshiji Ka Poriya..!!</h1>
  )
 }
// agar function Component k andar ek aur function banate hai to use usi me call bhi kar skte hai hame use import karne ki jarurat nhi hai
