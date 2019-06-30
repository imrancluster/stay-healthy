import React, { Component } from 'react'

import { connect } from "react-redux";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getHospitals } from "../../actions/hospitalActions";
import Hospital from './Hospital';

class HospitalList extends Component {

  // another life cycle hooks
  componentDidMount() {
    this.props.getHospitals();
  }

  render() {

    const {hospitals} = this.props.hospital;

    return (
      <section className="hospital-list-section">
        <div className="container">
        <h2>Hospital List</h2>
        <hr />

        <div className="container">
          <div className="row justify-content-md-center">
            {hospitals.map(hospital => (
              <Hospital key={hospital.id} hospital={hospital} />
            ))}
          </div>
        </div>
      </div>

      <div className="create-new-hospital">
        <Link to="/add-hospital"><FontAwesomeIcon icon="plus-circle" /></Link>
      </div>
      </section>
    )
  }
}

HospitalList.propTypes = {
  hospital: PropTypes.object.isRequired,
  getHospitals: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  hospital: state.hospital
});

export default connect(mapStateToProps, {getHospitals})(HospitalList);
