import React, { Component } from 'react'
import {Link} from "react-router-dom"

class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-4">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Stay Healthy
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                    <span className="navbar-toggler-icon" />
                </button>
                
            </div>
        </nav>
    )
  }
}


export default Header;
