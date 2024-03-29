import React, { useMemo, useState } from 'react'

export default function Memo() {
    const [data,setData]=useState(0)
    const [count,setCount]=useState(10)
    const usememcount=useMemo(function multicount(){
        console.log("hii!!!")
        return data*5
    },[data])
  return (
    <div>
      <h1>{usememcount}</h1>
      <h1>data:{data} </h1>
      <h1>count :{count}</h1>
      <button onClick={()=>setData(data+1)}>data</button>
      <button onClick={()=>setCount(count+1)}>COunt</button>
 </div>
  )
}
