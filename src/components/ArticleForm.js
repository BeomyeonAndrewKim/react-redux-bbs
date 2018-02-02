import React, { Component } from 'react';

import { Form, Input, TextArea, Message } from 'semantic-ui-react';

export default class ArticleForm extends Component {
  static defaultProps = {
    errorMessage: '',
    onSubmit: () => {},
    creating: false,
  };

  state = {
    title: '',
    content: '',
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    this.props.onSubmit(this.state);
  };
  render() {
    const { title, content } = this.state;
    const { errorMessage, creating } = this.props;
    return (
      <Form loading={creating}>
        <Form.Field
          control={Input}
          label="Title"
          name="title"
          placeholder="Title"
          onChange={this.handleChange}
          value={title}
        />
        <Form.Field
          control={TextArea}
          label="Content"
          name="content"
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
