import reducer from './articles.reducer';
import {
  GET_ARTICLES,
  GET_ARTICLES_FAILURE,
  GET_ARTICLES_SUCCESS
} from './articles.actions';

describe('Articles Reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      appName: 'Conduit',
      isFetching: false,
      articles: null,
      error: null
    };
    expect(reducer(undefined, {})).toEqual(expectedState);
  });

  it('should return the GET_ARTICLES state', () => {
    const oldState = {
      appName: 'Conduit',
      isFetching: false,
      articles: null,
      error: null
    };
    const expectedState = {
      appName: 'Conduit',
      isFetching: true,
      articles: [],
      error: null
    };
    expect(
      reducer(oldState, {
        type: GET_ARTICLES,
        articles: []
      })
    ).toEqual(expectedState);
  });

  it('should return the GET_ARTICLES_SUCCESS state', () => {
    const articles = [
      {
        title: 'Title 1'
      },
      {
        title: 'Title 2'
      }
    ];
    const oldState = {
      appName: 'Conduit',
      isFetching: true,
      articles: [],
      error: null
    };
    const expectedState = {
      appName: 'Conduit',
      isFetching: false,
      articles,
      error: null
    };
    expect(
      reducer(oldState, {
        type: GET_ARTICLES_SUCCESS,
        articles: {
          articles
        },
        isFetching: false,
        error: null
      })
    ).toEqual(expectedState);
  });

  it('should return the GET_ARTICLES_FAILURE state', () => {
    const oldState = {
      appName: 'Conduit',
      isFetching: true,
      articles: [],
      error: null
    };
    const expectedState = {
      appName: 'Conduit',
      isFetching: false,
      articles: [],
      error: {
        message: 'Error Fetching Articles'
      }
    };
    expect(
      reducer(oldState, {
        type: GET_ARTICLES_FAILURE,
        isFetching: false,
        error: null,
        payload: {
          message: 'Error Fetching Articles'
        }
      })
    ).toEqual(expectedState);
  });
});
