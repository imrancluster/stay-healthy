import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";


import "bootstrap/dist/css/bootstrap.min.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import Landing from './components/Layout/Landing';
import HospitalList from './components/Hospital/HospitalList';
import HospitalDetails from './components/Hospital/HospitalDetails';
import AddHospital from './components/Hospital/AddHospital';

library.add(faIgloo);
library.add(faPlusCircle);
// library.add(faPlusCircle);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />

            {
              // Public Routes
            }
            <Route exact path="/" component={Landing} />

            <Route exact path="/hospital" component={HospitalList} />
            <Route exact path="/hospital/:id" component={HospitalDetails} />
            <Route exact path="/add-hospital" component={AddHospital} />

          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
