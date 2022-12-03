import React, { Component } from "react";

import "./App.css";
import {HashRouter} from 'react-router-dom'

import Main from './Components/MainComponent'
class App extends Component {
  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
      <React.Fragment>
      <Main></Main>
       
      </React.Fragment>
      </HashRouter>
    );
  }
}

export default App;
