import React from 'react';
import TopMenuContainer from './TopMenuContainer';
import withAuth from '../hocs/withAuth';
import ArticleFormContainer from './ArticleFormContainer';

const NewPageArticle = () => (
  <div>
    <TopMenuContainer />
    <ArticleFormContainer />
  </div>
);

export default withAuth(NewPageArticle);
