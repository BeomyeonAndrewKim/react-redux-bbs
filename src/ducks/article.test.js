import reducer, {
  CREATING,
  SUCCESS,
  ERROR,
  articleSuccess,
  articleCreating,
  articleError,
} from './article';

describe('article', () => {
  it('articleCreating 동작 여부 확인', () => {
    const action = articleCreating();
    expect(action).toEqual({
      type: CREATING,
    });
  });
  it('articleSuccess 동작 여부 확인', () => {
    const action = articleSuccess();
    expect(action).toEqual({
      type: SUCCESS,
    });
  });
  it('articleError 넘겼을 때의 상태', () => {
    const action = articleError('error');
    expect(action).toEqual({
      type: ERROR,
      errorMessage: 'error',
    });
  });
  it('articleSuccess 리듀서 테스트', () => {
    const state = reducer(undefined, articleSuccess());
    expect(state).toEqual({
      creating: false,
      success: true,
      errorMessage: '',
    });
  });
  it('articleCreating 리듀서 테스트', () => {
    const state = reducer(undefined, articleCreating());
    expect(state).toEqual({
      creating: true,
      success: false,
      errorMessage: '',
    });
  });
  it('articleError 리듀서 테스트', () => {
    const state = reducer(undefined, articleError('error'));
    expect(state).toEqual({
      creating: false,
      success: false,
      errorMessage: 'error',
    });
  });
});
