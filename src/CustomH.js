import React from 'react'
import useCounter from './useCounter'

export default function CustomH() {
    const [count,increase,decrease]=useCounter()
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increase}>InC</button>
      <button onClick={decrease}>Dec</button>
    </div>
  )
}
