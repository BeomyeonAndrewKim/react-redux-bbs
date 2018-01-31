import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import LoginScreenContainer from "./containers/LoginScreenContainer";
import ListPage from "./containers/ListPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Redirect to="/list" />
          <Route path="/login" component={LoginScreenContainer} />
          <Route path="/list" component={ListPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
