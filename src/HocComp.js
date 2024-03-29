import { useState } from "react"

var HocComp=()=>{
    return(
        <div>
            {/* <Counter></Counter> */}
            <Redcmp cmp={Counter}></Redcmp>
            <Greencmp cmp={Counter}></Greencmp>
            <Bluecmp cmp={Counter}></Bluecmp>

        </div>
    )
}

function Redcmp(prop){
    console.log("I am RedCamp")
    return(
        <h1 style={{backgroundColor:"pink",width:"200px"}}><prop.cmp/></h1>
    )
}

function Greencmp(prop){
    console.log("I am Green")
    return(
        <h1 style={{backgroundColor:"Green",width:"200px"}}><prop.cmp/></h1>
    )
}
function Bluecmp(prop){
    console.log("I am Blue Wala")
    return(
        <h1 style={{backgroundColor:"aqua",width:"200px"}}><prop.cmp/></h1>
    )
}
function Counter(){
    const [count,setCount]=useState(0)
    console.log("Counter Hu main")
    return(
        <div>
            <h1>Count : {count}</h1>
            <button onClick={()=>setCount(count+1)}>OK!!</button>
        </div>
    )
}
export default HocComp