import React from 'react'
import './Abc.css'
import style from './Abc.module.css'
export default function ApplyCss() {
  return (
    <div>
      <h1 style={{backgroundColor:"red"}}>Inline Css</h1><br/>
      <h1 className='hello'>External Css</h1><br/>
      <h1 className={style.hello1}>External Css</h1><br/>

    </div>
  )
}
