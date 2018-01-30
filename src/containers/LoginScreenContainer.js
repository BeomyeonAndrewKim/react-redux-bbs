import React, { Component } from "react";
import LoginScreen from "../components/LoginScreen";

import * as firebase from "firebase";
import { Redirect } from "react-router-dom";

export default class LoginScreenContainer extends Component {
  state = {
    redirectToList: false
  };
  handleGoogleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
    this.setState({
      redirectToList: true
    });
  };
  render() {
    return this.state.redirectToList ? (
      <Redirect to="/list" />
    ) : (
      <LoginScreen onGoogleLogin={this.handleGoogleLogin} />
    );
  }
}
