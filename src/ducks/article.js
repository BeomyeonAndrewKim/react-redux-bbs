import * as firebase from 'firebase';

export const CREATING = 'article/CREATING';
export const SUCCESS = 'article/SUCCESS';
export const ERROR = 'article/ERROR';

export function articleCreating() {
  return {
    type: CREATING,
  };
}

export function articleSuccess() {
  return {
    type: SUCCESS,
  };
}

export function articleError(errorMessage) {
  return {
    type: ERROR,
    errorMessage,
  };
}

const initialState = {
  creating: false,
  success: false,
  errorMessage: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATING:
      return {
        creating: true,
        success: false,
        errorMessage: '',
      };
    case SUCCESS:
      return {
        creating: false,
        success: true,
        errorMessage: '',
      };
    case ERROR:
      return {
        creating: false,
        success: false,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
}

export const createArticle = ({ title, content }) => async dispatch => {
  if (!title || !content) {
    dispatch(articleError('Please Fill Out the Form.'));
    return;
  }
  const { currentUser } = firebase.auth();
  if (!currentUser) {
    return;
  }
  dispatch(articleCreating());
  try {
    const articleRef = firebase
      .database()
      .ref('articles')
      .push({
        title,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        uid: currentUser.uid,
      });
    const contentPromise = firebase
      .database()
      .ref(`content/${articleRef.key}`)
      .set(content);
    await Promise.all([articleRef, contentPromise]);
    dispatch(articleSuccess());
  } catch (e) {
    dispatch(articleError(`Unknown Error. Please Retry: ${e.message}`));
  }
};
