import { connect } from 'react-redux';
import ArticleList from '../components/ArticleList';
import { fetchArticleList } from '../ducks/articleList';
import withLoading from '../hocs/withLoading';

export default connect(
  state => ({
    articles: state.articleList.articles,
  }),
  dispatch => ({
    onMount: () => {
      dispatch(fetchArticleList());
    },
  }),
)(withLoading(ArticleList));
