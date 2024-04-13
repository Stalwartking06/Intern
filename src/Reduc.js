import React, { useReducer } from 'react'
const reducer=(state,action)=>{
    switch(action){
        case "increase" : return state+1
        case "decrease" : return state-1
        default: return state
    }
}
export default function Reduc() {
    const [count,getData]=useReducer(reducer,0)
  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={()=>getData("increase")}>INC</button>
      <button onClick={()=>getData("decrease")}>DEC</button>

    </div>
  )
}
