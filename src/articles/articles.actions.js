import 'cross-fetch';

export const GET_ARTICLES = 'GET_ARTICLES';
export const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS';
export const GET_ARTICLES_FAILURE = 'GET_ARTICLES_FAILURE';

const API_ROOT = 'https://conduit.productionready.io/api';

// Synchronous action creators.
export const getArticles = () => {
  return {
    type: GET_ARTICLES
  };
};

export const getArticlesSuccess = articles => {
  return {
    type: GET_ARTICLES_SUCCESS,
    articles
  };
};

export const getArticlesFailure = error => {
  return {
    type: GET_ARTICLES_FAILURE,
    error
  };
};

// Async action creators.
// used by thunk middleware.
export const fetchArticles = () => dispatch => {
  // Dispatch action to indicate articles are being fetched.
  dispatch(getArticles());

  // Return promise to wait for
  return fetch(`${API_ROOT}/articles`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
    .then(
      response => response.json(),
      error => console.error('An error occurred.', error)
    ) // Update the app state with the results of the API call.
    .then(json => dispatch(getArticlesSuccess(json)));
};
