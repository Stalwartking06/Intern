import React, { Component } from 'react'

export default class Mount extends Component {
    constructor(){
        super()
        console.log("constructor")
    }
    componentDidMount(){
        console.log("componenet did Mount")
    }
  render() {
    console.log("Render")
    return (
      <div>
        mount
      </div>
    )
  }
}
