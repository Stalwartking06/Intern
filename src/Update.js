import React, { Component } from 'react'

export default class Update extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    shouldComponentUpdate(){
        if(this.state.count>5 && this.state.count<10){
            console.log("yaha chalega")
            return true
        }else{
        console.log(" methode nahi hoga bhai")
        return false;
    }
    }
  render() {
    console.log("render")
    return (
      <div>
        <h1>count : {this.state.count}</h1>
        <button onClick={()=>this.setState({count:1})}>ok!</button>

        <button onClick={()=>this.setState({count:this.state.count+1})}>ok!</button>
      </div>
    )
  }
  componentDidUpdate(){
    console.log("Update Component")
  }
}
