import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar tittle="NewsApp"/>
      </div>
    )
  }
}

export default App
