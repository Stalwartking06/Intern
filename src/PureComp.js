import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
  render() {
   console.log("render Hua")
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>ok!!</button>
      </div>
    )
  }
}
