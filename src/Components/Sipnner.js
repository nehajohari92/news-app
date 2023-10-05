import React, { Component } from 'react'
import loading from './loading.gif'

export class Sipnner extends Component {
  render() {
    return (
      <div>
        <img src={loading} alt='Loading'></img>
      </div>
    )
  }
}

export default Sipnner
