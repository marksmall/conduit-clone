import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  GET_ARTICLES,
  GET_ARTICLES_SUCCESS,
  fetchArticles
} from './articles.actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Article Actions', () => {
  it('calls request and success actions if the fetch response was successful', () => {
    const articles = [
      {
        title: 'Title 1'
      },
      {
        title: 'Title 2'
      }
    ];

    fetch.mockResponse(JSON.stringify(articles));

    const expectedActions = [
      { type: GET_ARTICLES },
      { type: GET_ARTICLES_SUCCESS, articles }
    ];
    const store = mockStore({ articles: [] });
    return store.dispatch(fetchArticles()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
