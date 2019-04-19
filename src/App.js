import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./components/views/HomePage";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pageName: ''
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={HomePage}/>
      </BrowserRouter>
    );
  }
}

export default App;
