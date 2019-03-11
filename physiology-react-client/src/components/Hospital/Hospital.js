import React, { Component } from 'react'

class Hospital extends Component {
  render() {
      
    const { hospital } = this.props;

    return (
      <tr>
        <td>{hospital.name}</td>
        <td>{hospital.address}</td>
      </tr>
    )
  }
}

export default Hospital;
