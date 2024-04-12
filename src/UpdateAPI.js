import { useState } from "react";
function UpdateAPI()
{
    const [id1,setId]=useState()

    const [rollno1,setRollno]=useState()
    const [name,setName]=useState()
    const [marks1,setMarks]=useState()
    function SubmitForm(e)
    {
        e.preventDefault();
         
         const id=parseInt(id1)

         const rollno=parseInt(rollno1)
         const marks=parseInt(marks1)
         const data={id,rollno,name,marks}
         console.log(rollno,name,marks)

         fetch("http://localhost:3002/posts/"+id,{
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

          <input type="number" placeholder="Enter RollNo" onChange={(e)=>setRollno(e.target.value)}></input><br></br>
          <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}></input><br></br>
          <input type="number" placeholder="Enter marks" onChange={(e)=>setMarks(e.target.value)}></input><br></br>
          <button>Submit</button>
          </form>
        </div>
    )
}
export default UpdateAPI