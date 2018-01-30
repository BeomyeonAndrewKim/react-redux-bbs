import React, { Component } from "react";
import { Grid, Segment, Button, Icon, Header } from "semantic-ui-react";
import styled from "styled-components";

const FullHeightGrid = styled(Grid)`
  height: 100vh;
`;

const StyledHeader = styled(Header)`
  padding: 10px;
  font-size: 30px;
`;

export default class extends Component {
  static defaultProps = {
    onGoogleLogin: () => {}
  };
  state = {};
  render() {
    return (
      <FullHeightGrid centered columns={3} verticalAlign="middle">
        <Grid.Column style={{ width: "280px" }}>
          <Segment stacked textAlign="center">
            <StyledHeader dividing>Login with SNS</StyledHeader>
            <Button
              style={{ margin: "10px 0" }}
              fluid
              color="google plus"
              className="Login__google"
              onClick={this.props.onGoogleLogin}
            >
              <Icon name="google plus" /> Google Plus
            </Button>
            <Button fluid color="twitter">
              <Icon name="twitter" /> Twitter
            </Button>
          </Segment>
        </Grid.Column>
      </FullHeightGrid>
    );
  }
}
