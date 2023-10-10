import React, { Component } from 'react'
import loading from './loading.gif'

export class Sipnner extends Component {
  render() {
    return (
      <div className='text-center my-3'>
        <img className='my-3' src={loading} alt='Loading'></img>
      </div>
    )
  }
}

export default Sipnner
