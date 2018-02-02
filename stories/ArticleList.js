import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import ArticleList from '../src/components/ArticleList';

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

const articlesWithLink = articles.map(article => ({
  ...article,
  itemProps: {
    as: 'a',
    href: 'https://google.com',
  },
}));

storiesOf('ArticleList', module)
  .add('default', () => <ArticleList articles={articles} />)
  .add('links', () => <ArticleList articles={articlesWithLink} />);
