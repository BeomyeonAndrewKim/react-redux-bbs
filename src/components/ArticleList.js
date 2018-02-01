import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

const articles = [
  {
    id: 'article0',
    title: '게시글 제목',
    createdAt: 1517453830448,
    nickName: '김범연',
  },
  {
    id: 'article1',
    title: '게시글 제목2',
    createdAt: 1517453912252,
    nickName: '김미연',
  },
];

export default class ArticleList extends Component {
  state = {};
  render() {
    return (
      <List divided relaxed>
        {articles.map(({
           id, title, createdAt, nickName,
          }) => (
            <List.Item key={id}>
              <List.Icon name="github" size="large" verticalAlign="middle" />
              <List.Content>
                <List.Header as="a">
                  {title} ({nickName})
                </List.Header>
                <List.Description as="a">{createdAt}</List.Description>
              </List.Content>
            </List.Item>
        ))}
      </List>
    );
  }
}
