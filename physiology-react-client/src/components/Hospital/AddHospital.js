import React, { Component } from 'react'

import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";

class AddHospital extends Component {

    constructor(props) {
        super(props);

        this.state = {
            "name": "",
            "address": "",
            "city": "",
            "state": "",
            "zipCode": "",
            "email": "",
            "telephoneNumber": ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const newHospital = {
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zipCode: this.state.zipCode,
            email: this.state.email,
            telephoneNumber: this.state.telephoneNumber
        };
        
        console.log(newHospital);
        
    }    
    
  render() {
    return (
      <section className="add-hospital-section">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Create Hospital Form</h5>
                    <hr />

                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Hospital Name"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>

                        <input
                        type="submit"
                        className="btn btn-primary btn-block mt-4"
                        />
                    </form>
                </div>
            </div>
        </div>
      </section>
    )
  }
}

export default AddHospital;