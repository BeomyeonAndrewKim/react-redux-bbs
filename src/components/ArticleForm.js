import React, { Component } from 'react';

import { Form, Input, TextArea, Message } from 'semantic-ui-react';

export default class ArticleForm extends Component {
  static defaultProps = {
    errorMessage: '',
    onSubmit: () => {},
  };

  state = {};

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    this.props.onSubmit(this.state);
  };
  render() {
    const { title, content } = this.state;
    const { errorMessage } = this.props;
    return (
      <Form as="div">
        <Form.Field
          id="form-input-control-Title"
          control={Input}
          label="Title"
          placeholder="Title"
          onChange={this.handleChange}
          value={title}
        />
        <Form.Field
          id="form-textarea-control-Content"
          control={TextArea}
          label="Content"
          placeholder="Content"
          onChange={this.handleChange}
          value={content}
        />
        <Form.Button content="Post" onClick={this.handleSubmit} />
        {errorMessage && (
          <Message negative>
            <Message.Header>Error!</Message.Header>
            <p>{errorMessage}</p>
          </Message>
        )}
      </Form>
    );
  }
}
