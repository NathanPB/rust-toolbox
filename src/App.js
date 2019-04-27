import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./components/views/HomePage";
import ServerList from "./components/views/ServerList";

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
        <Switch>
          <Route path="/" exact={true} component={HomePage}/>
          <Route path="/servers" component={ServerList}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
