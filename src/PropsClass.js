import React, { Component } from 'react'

export default class PropsClass extends Component {
  render() {
    console.log(this)
    return (
      <div>
        <h1>My name is {this.props.name}</h1>
        <h1>My age is {this.props.age}</h1>
        <h1>My add is {this.props.add}</h1>
      </div>
    )
  }
}
