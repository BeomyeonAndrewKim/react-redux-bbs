import { connect } from 'react-redux';
import ArticleList from '../components/ArticleList';
import { fetchArticleList } from '../ducks/articleList';

export default connect(
  state => ({
    articles: state.articleList.articles,
  }),
  dispatch => ({
    onMount: () => {
      dispatch(fetchArticleList());
    },
  }),
)(ArticleList);
