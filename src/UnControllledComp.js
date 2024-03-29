import React, { Component,createRef } from 'react'

export default class UnControllledComp extends Component {
    constructor(){
        super()
            this.inputref=createRef();
            this.betaref=createRef();
    }
    hello(){
        this.inputref.current.value="hello Bro!";
        this.inputref.current.style.color="red";
        this.inputref.current.style.backgroundColor="aqua";
        console.log(this.inputref.current.value)

        
        this.betaref.current.value="hello Sis!";
        this.betaref.current.style.color="blue";
        this.betaref.current.style.backgroundColor="green";
        console.log(this.betaref.current.value)
    }
  render() {
    console.log("render")
    return (
      <div>
        <input type="text" placeholder="Enter Name" ref={this.inputref}></input>
        <button onClick={()=>this.hello()}>ok!</button>
        <input type="text" placeholder="Enter Name" ref={this.betaref}></input>

      </div>
    )
  }
}
