import {
  GET_ARTICLES,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILURE
} from './articles.actions';

const DEFAULT_STATE = {
  isFetching: false,
  articles: null,
  error: null
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        isFetching: true,
        articles: [],
        error: null
      };
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        articles: action.articles
      };
    case GET_ARTICLES_FAILURE:
      const error = action.payload || { message: action.payload.message };
      // console.log('Error created: ', error);
      return {
        ...state,
        isFetching: false,
        articles: [],
        error
      };
    default:
      return state;
  }
};

// Articles selector, used in container
export const getArticles = state => state.articles.articles;
