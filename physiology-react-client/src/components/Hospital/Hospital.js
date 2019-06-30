import React, { Component } from 'react'
import {Link} from "react-router-dom"

class Hospital extends Component {
  render() {
      
    const { hospital } = this.props;

    return (
      <div className="col col-lg-6">  
        <Link to={`/hospital/${hospital.id}`}>
          <h2 className="title">{hospital.name}</h2>
          <p className="address">{hospital.address}</p>
        </Link>
      </div>
    )
  }
}

export default Hospital;
