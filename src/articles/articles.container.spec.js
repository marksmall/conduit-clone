import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import ArticlesListContainer from './articles.container';

const mockStore = configureMockStore();
describe('ArticlesListContainer', () => {
  it('Renders Articles List Redux connected component', () => {
    const initialState = {
      appName: 'Conduit',
      isFetching: false,
      articles: null,
      error: null
    };

    const store = mockStore(initialState);
    const testee = shallow(<ArticlesListContainer store={store} />);
    expect(testee.length).toEqual(1);
    // console.log(testee.debug());
  });

  it('Check props matches the Loading... state', () => {
    const initialState = {
      appName: 'Conduit',
      isFetching: true,
      articles: [],
      error: null
    };

    const store = mockStore(initialState);
    const testee = shallow(<ArticlesListContainer store={store} />);
    expect(testee.prop('articles')).toEqual([]);
  });

  it('Check props matches the data retrieved state', () => {
    const articles = [
      {
        title: 'Title 1'
      },
      {
        title: 'Title 2'
      }
    ];
    const initialState = {
      appName: 'Conduit',
      isFetching: false,
      articles: articles,
      error: null
    };

    const store = mockStore(initialState);
    const testee = shallow(<ArticlesListContainer store={store} />);
    expect(testee.prop('articles')).toEqual(initialState.articles);
  });
});
