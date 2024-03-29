import React from 'react'
import Table from 'react-bootstrap/Table';

export default function List() {
    var arr=["Akshat","Bharat","Harsh"]
    var brr=[{rollno:101,name:"Aksh",marks:75},{rollno:102,name:"Aman",marks:95},
                {rollno:103,name:"Shiva",marks:85},{rollno:104,name:"Chotu",marks:75}]
  return (
    <div style={{backgroundColor:"black",color:"red"}}>
    
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>key</th>
          <th>RollNo</th>
          <th> Name</th>
          <th>Marks</th>
        </tr>
      </thead>
      <tbody>
        {
            brr.map((item,i)=>        <tr>
          <td key="i">{i}</td>
          <td>{item.rollno}</td>
          <td>{item.name}</td>
          <td>{item.marks}</td>
        </tr>
        )
    }

      </tbody>
    </Table>
    <h1>list</h1>{
      arr.map((item)=>
      <h1>{item}</h1>
      )
    }
    
</div>
  )
}



    