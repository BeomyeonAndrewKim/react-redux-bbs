export const LOAD = 'articleList/LOAD';
export const SUCCESS = 'articleList/SUCCESS';

export function ArticleListLoading() {
  return {
    type: LOAD,
  };
}

export function successArticleList(articles) {
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
