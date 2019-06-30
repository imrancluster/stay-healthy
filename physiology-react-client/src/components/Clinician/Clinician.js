import React, { Component } from 'react'

class Clinician extends Component {
  render() {

    const { clinician } = this.props;

    return (
      <div>
        <h1>{clinician.name}</h1>
        <p>{clinician.email}</p>
      </div>
    )
  }
}

export default Clinician;
