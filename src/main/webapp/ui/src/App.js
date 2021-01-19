import React, { Component } from 'react';
import Home from "./Home/index";
import { store } from "./index";
class App extends Component {
  render() {
    console.log(store.getState())
    return (
      <Home />
    );
  }
}

export default App;
