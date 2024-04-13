import  { useState } from 'react'

export default function useCounter() {
    const [data,setData]=useState(0)

    function increase(){
        setData(data+1)
    }
    function decrease(){
        setData(data-1)

    }
 return [data,increase,decrease]
}
