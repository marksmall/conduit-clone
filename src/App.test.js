import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Header from './layout/header.component';
import Banner from './layout/banner.component';
import Footer from './layout/footer.component';
// import PageNotFound from './layout/page-not-found.component';
import App from './App';

// import ArticlesListContainer from './articles/articles.container';

describe('App:', () => {
  it('renders without crashing', () => {
    const testee = shallow(<App />);
    expect(testee).toBeDefined();
    // console.log(app.debug());
  });

  it('renders sub-components', () => {
    const testee = shallow(<App />);
    expect(testee.find(<Header />)).toBeDefined();
    expect(testee.find(<Banner />)).toBeDefined();
    expect(testee.find(<Footer />)).toBeDefined();
  });

  xit('renders when integrated with Redux and react-router', () => {
    const mockStore = configureStore();
    const initialState = {
      appName: 'Conduit',
      isFetching: false,
      articles: null,
      error: null
    };
    const store = mockStore(initialState);
    const testee = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(testee).toBeDefined();
    expect(testee.find(Header)).toHaveLength(1);
    // expect(testee.find(Banner)).toHaveLength(1);
    // // expect(testee.find(ArticlesListContainer)).toHaveLength(1);
    // expect(testee.find(Footer)).toHaveLength(1);
    // expect(testee.find(PageNotFound)).toHaveLength(0);
  });
});
