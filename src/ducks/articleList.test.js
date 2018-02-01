import reducer, {
  ArticleListLoading,
  successArticleList,
  LOAD,
  SUCCESS,
} from './articleList';

describe('articleList', () => {
  it('ArticleListLoading 동작 여부 확인', () => {
    const action = ArticleListLoading();
    expect(action).toEqual({
      type: LOAD,
    });
  });
  it('reducer 테스트', () => {
    const state = reducer(undefined, {});
    expect(state.loading).toBe(false);
    expect(state.articles).toEqual([]);
  });
  it('ArticleListLoading 넘겼을 때의 상태', () => {
    const state = reducer(undefined, ArticleListLoading());
    expect(state.loading).toBe(true);
    expect(state.articles).toEqual([]);
  });
  it('loadingArticlesList를 articles가 존재하는 상태에 적용', () => {
    const state = reducer(
      {
        loading: false,
        articles: [1, 2, 3],
      },
      ArticleListLoading(),
    );
    expect(state.loading).toBe(true);
    expect(state.articles).toEqual([1, 2, 3]);
  });
});

describe('successList', () => {
  it('successArticleList 동작 여부 확인', () => {
    const action = successArticleList();
    expect(action).toEqual({
      type: SUCCESS,
    });
  });
});
