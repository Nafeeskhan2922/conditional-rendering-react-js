import {Component} from 'react'
import Welcome from './components/Welcome'

class App extends Component {
  state = {isLoggedIn: true}

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Welcome greeting="Hello" />
      </div>
    )
  }
}

export default App

/* 1.1 Using an If...Else Statement

import { Component } from "react"
import './App.css'

class App extends Component {
  state = { isLoggedIn: true }

   renderAuthButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return <button>Logout</button>
    }
    return <button>Login</button>
  }

  render() {
    return (
     <div className="container">
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default App */

/* 1.2 Using Element Variables

import { Component } from "react"
import './App.css'

class App extends Component {
  state = { isLoggedIn: true }

  render() {
    const { isLoggedIn } = this.state
    let authButton
    if (isLoggedIn) {
      authButton = <button>Logout</button>
    } else {
      authButton = <button>Login</button>
    }
    return (
      <div className="container">
        <h1>React JS</h1>
        {authButton}
      </div>
    )
 }
}

export default App */

/* 1.3 Using Ternary Operators 

import { Component } from "react"
import './App.css'

class App extends Component {

  render() {
    const { isLoggedIn } = this.state
    return (
      <div className="container">
        {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
      </div>
    )
  }
}

export default App */

/* 1.4 Using Logical && Operator 

import { Component } from "react"
import './App.css'

class App extends Component {

  render() {
    const { isLoggedIn } = this.state
    return (
      <div className="container">
        {isLoggedIn && <button>Logout</button>}
        {!isLoggedIn && <button>Login</button>}
      </div>
    )
  }
}

export default App */
