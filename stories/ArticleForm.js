import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ArticleForm from '../src/components/ArticleForm';

storiesOf('ArticleForm', module)
  .add('default', () => <ArticleForm onSubmit={action('handleSubmit')} />)
  .add('error', () => (
    <ArticleForm errorMessage="You should fill out the form" />
  ))
  .add('loading', () => <ArticleForm creating />);
