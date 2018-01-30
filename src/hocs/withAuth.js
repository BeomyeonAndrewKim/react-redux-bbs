import React, { Component } from "react";
import * as firebase from "firebase";
import { Redirect } from "react-router-dom";
import { Dimmer, Loader } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default function withAuth(WrappedComponent) {
  return class extends Component {
    state = {
      currentUser: null,
      loading: false,
      redirectToLogin: false
    };

    componentWillMount() {
      const currentUser = firebase.auth().currentUser;
      currentUser
        ? this.setState({ currentUser })
        : this.setState({ loading: true });

      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
        unsubscribe();
        user
          ? this.setState({
              currentUser: user,
              loading: false
            })
          : this.setState({ redirectToLogin: true });
      });
    }

    render() {
      if (this.state.redirectToLogin) {
        return <Redirect to="/login" />;
      } else if (this.state.loading) {
        return (
          <Dimmer active={this.state.loading}>
            <Loader />
          </Dimmer>
        );
      } else {
        return <WrappedComponent {...this.props} />;
      }
    }
  };
}
