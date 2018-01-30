import React, { Component } from "react";
import TopMenu from "../components/TopMenu";
import { Link } from "react-router-dom";

const logoProps = {
  as: Link,
  to: "/link"
};
const accountProps = {
  as: Link,
  to: "/account"
};

export default class TopMenuContainer extends Component {
  state = {};
  render() {
    return <TopMenu logoProps={logoProps} accountProps={accountProps} />;
  }
}
