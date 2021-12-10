import React, { Component } from 'react'
import './App.css'
import NavBar from './Component/NavBar'
import Section from './Component/Section'

export default class App extends Component {

  render() {
    return (
      <div>
        <NavBar/>
        <Section/>
      </div>
    )
  }
}
