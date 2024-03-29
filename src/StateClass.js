import { Component } from "react"

class StateClass extends Component 
{
    constructor()
    {
        super()
        this.state=
        {
            name:"Ram",
            age:22
        }
    }
    render()
    {
        return(
            <div>
                <h1>My Name is {this.state.name}</h1>
                <h1>My age is{this.state.age}</h1>
                <button onClick={()=>this.setState({name:"Shyam" ,age:23})}>Submit</button>
            </div>
        )
    }
}
export default StateClass