import React, { useCallback, useState } from 'react'
import CHilC from './CHilC'

export default function USEC() {
    const [data,setData]=useState(0)
    const usecall=useCallback(function hello(){

    },[])
  return (
    <div>
      <CHilC hello={usecall}></CHilC>
      <h1>Data {data}</h1>
      <button onClick={()=>setData(data+1)}>ok...!!</button>
    </div>
  )
}
