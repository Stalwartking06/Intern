import React, { useEffect, useState } from 'react'

export default function Use_Effect() {
    const[count,setCount]=useState(0)
    const[data,setData]=useState(10)
    const[run,setRun]=useState(100)
    //aur error se bachne k lie hamesha state effect se upar use karo ya define karo
    //isme jo value array subscript me h wo load hoga
    useEffect(() => {
        console.log("Loading..")
    },[data,run])
    //niche wale me koi load nahi hoga
    // useEffect(() => {
    //     console.log("Loading..")
    // },[])
    //isme sare load hoge 
    // useEffect(() => {
    //     console.log("Loading..")
    // })
     return (
    <div>
      <h1>I am Use Effect</h1>
      <h1>{count}</h1>
      <h1>{data}</h1>
      <h1>{run}</h1>
      <button onClick={()=>setCount(count+1)}>ok</button>
      <button onClick={()=>setData(data+1)}>ok</button>
      <button onClick={()=>setRun(run+1)}>ok</button>
    </div>
  )
}
