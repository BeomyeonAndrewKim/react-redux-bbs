import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleList from '../components/ArticleList';
import { fetchArticleList } from '../ducks/articleList';
import withLoading from '../hocs/withLoading';

const ArticleListWithLoading = withLoading(ArticleList);
class ArticleListContainer extends Component {
  static defaultProps = {
    onMount: () => {},
  };

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    const { onMount, ...rest } = this.props;
    return <ArticleListWithLoading {...rest} />;
  }
}

export default connect(
  state => ({
    articles: state.articleList.articles,
    loading: state.articleList.loading,
  }),
  dispatch => ({
    onMount: () => {
      dispatch(fetchArticleList());
    },
  }),
)(ArticleListContainer);
