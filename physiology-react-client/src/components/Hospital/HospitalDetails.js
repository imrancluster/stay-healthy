import React, { Component } from 'react'

import { connect } from "react-redux";
import PropTypes from "prop-types";

import {getHospital} from "../../actions/hospitalActions";
import {getClinicians} from "../../actions/clinicianActions";

import  Clinician from '../Clinician/Clinician';

class HospitalDetails extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        const { id } = this.props.match.params;
        this.props.getHospital(id);
        this.props.getClinicians(id);
    }

  render() {

    const { hospital, clinicians } = this.props;
    console.log(clinicians);

    return (
      <div className="container">
        <div className="row">
            <div className="col col-lg-12"> 
                <h2 className="title">{hospital.name}</h2>
                <p className="address">{hospital.address}</p>
                <hr />
                
                {clinicians.map(clinician => (
                    <Clinician key={clinician.id} clinician={clinician} />
                  ))}

            </div>
        </div>
      </div>
    )
  }
}

HospitalDetails.propTypes = {
    getHospital: PropTypes.func.isRequired,
    getClinicians: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    hospital: state.hospital.hospital,
    clinicians: state.clinician.clinicians
  });

export default connect(mapStateToProps, {getHospital, getClinicians})(HospitalDetails);
