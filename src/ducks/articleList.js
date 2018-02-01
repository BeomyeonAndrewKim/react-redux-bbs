import * as firebase from 'firebase';

export const LOAD = 'articleList/LOAD';
export const SUCCESS = 'articleList/SUCCESS';

export function ArticleListLoading() {
  return {
    type: LOAD,
  };
}

export function ArticleListSuccess(articles) {
  return {
    type: SUCCESS,
    articles,
  };
}

const initialState = {
  loading: false,
  articles: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS:
      return {
        loading: false,
        articles: action.articles,
      };
    default:
      return state;
  }
}

export const fetchArticleList = () => async dispatch => {
  dispatch(ArticleListLoading());
  const snapshot = await firebase
    .database()
    .ref('articles')
    .once('value');
  const articlesObj = snapshot.val();
  const articles = Object.entries(articlesObj).map(([id, article]) => ({
    ...article,
    id,
    nickName: '김범연', // FIXME
  }));
  dispatch(ArticleListSuccess(articles));
};
