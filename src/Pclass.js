import React, { Component } from 'react'
import PropsClass from './PropsClass'

export default class Pclass extends Component {
    constructor(){
        super()
        this.state={
            name:"ram",
            age:25,
            add:"khandwa"
        }
    }
  render() {
    return (
      <div>
        <PropsClass name={this.state.name} age={this.state.age} add={this.state.add}></PropsClass>
        <button onClick={()=>this.setState(
            {
                name:"SHyam",
                age:28,
                add:"indore"
            }
        )}>Submit</button>
      </div>
    )
  }
}
