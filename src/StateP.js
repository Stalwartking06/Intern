import React from 'react'

export default function StateP() {
  // function hello(){
  //   alert("Hello");
  // } ye non perameter wala Function hai isliye ise call karne k lie react me default name likh k bhi call kar skte hai
  //  aur agr pera wale rahe to arrow function se call kar skte hai

  function hello(name){
       alert("Hello  "+name);
    }
  return (
    <div>
      {/* <button onClick={hello}>Tap Me.!</button> */}
      <button onClick={()=>hello("Ram")}>Tap Me.!</button>
      
    </div>

    
  )
}

