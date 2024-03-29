import { useState } from "react";
function DeleteApi()
{
    const [id1,setId]=useState()

    
    function SubmitForm(e)
    {
        e.preventDefault();
         
         const id=parseInt(id1)

        
         const data={id}
         

         fetch("http://localhost:3000/posts/"+id,{
            method:"PUT",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
         }).then((result)=>{
            console.log(result)
            // result.json().then((data1)=>{
            //     console.log(data1)
            // })
         })
    }
    return(
        <div>
          <form onSubmit={SubmitForm}>
          <input type="number" placeholder="Enter id" onChange={(e)=>setId(e.target.value)}></input><br></br>

          
          <button>Submit</button>
          </form>
        </div>
    )
}
export default DeleteApi