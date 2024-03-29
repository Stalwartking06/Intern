import React, { useState } from 'react'

export default function PostProduct() {
    const[id1,setId]=useState();
    const[title,setTitle]=useState();
    const[description,setDescription]=useState();
    const[price1,setPrice]=useState();
    const[category,setCategory]=useState();

    function SubmitForm(e){
        e.preventDefault()
        // console.log(id,title,description,price,category);
        const id=parseInt(id1);
        const price=parseInt(price1);
        const obj={id,title,description,price,category};
        fetch("https://fakestoreapi.com/products",{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
            },
            body:JSON.stringify(obj)
        }).then((result)=>{
            result.json().then((data)=>{
                console.log(data)
            })
        })

    }
    return (
        <div>
          <form onSubmit={SubmitForm}>
            <input type="number" name="Enter Id" onChange={(e)=>setId(e.target.value)}/><br/>
            <input type="text" placeholder="Enter Title" onChange={(e)=>setTitle(e.target.value)}/><br></br>
            <input type="text" placeholder="Enter Description" onChange={(e)=>setDescription(e.target.value)}/><br></br>
            <input type="number" placeholder="Enter Price" onChange={(e)=>setPrice(e.target.value)}/><br></br>
            <input type="text" placeholder="Enter Category" onChange={(e)=>setCategory(e.target.value)}/><br></br>
            <button type="submit">Submit</button>
          </form>
        </div>
    )
}
