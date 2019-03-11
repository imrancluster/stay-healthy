import React, { Component } from 'react'

import { connect } from "react-redux";
import PropTypes from "prop-types";

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
      <div className="container">
        <h2>Hospital List</h2>
        <hr />

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {hospitals.map(hospital => (
              <Hospital key={hospital.id} hospital={hospital} />
            ))}
          </tbody>
        </table>

      </div>
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
