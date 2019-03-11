import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";


import "bootstrap/dist/css/bootstrap.min.css";
import Landing from './components/Layout/Landing';
import HospitalList from './components/Hospital/HospitalList';

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

          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
