import React from 'react';
import { shallow } from 'enzyme';

import ArticlesList from './articles-list.component';

describe('ArticleList Component', () => {
  const mockFetch = jest.fn();

  it('Render when fetching a list of Articles', () => {
    const articles = undefined;

    const testee = shallow(
      <ArticlesList articles={articles} fetchArticles={mockFetch} />
    );
    // console.log(testee.debug());
  });

  it('Render an empty list of Articles', () => {
    const articles = [];
    const testee = shallow(
      <ArticlesList articles={articles} fetchArticles={mockFetch} />
    );
    // console.log(testee.debug());
  });

  it('Render a list of Articles', () => {
    const articles = [
      {
        title: 'How to train your dragon',
        slug: 'how-to-train-your-dragon-kj1m3z',
        body: 'Very carefully.',
        createdAt: '2018-02-28T14:55:59.091Z',
        updatedAt: '2018-02-28T14:55:59.091Z',
        tagList: ['training', 'dragons'],
        description: 'Ever wonder how?',
        author: {
          username: 'test-user-1',
          bio: null,
          image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
          following: false
        },
        favorited: false,
        favoritesCount: 0
      },
      {
        title: 'How to train your dragon2',
        slug: 'how-to-train-your-dragon-kj1m3z2',
        body: 'Again, Be Very carefe.',
        createdAt: '2018-02-28T14:55:59.091Z',
        updatedAt: '2018-02-28T14:55:59.091Z',
        tagList: ['training', 'dragons'],
        description: 'Ever wonder how?',
        author: {
          username: 'test-user-1',
          bio: null,
          image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
          following: false
        },
        favorited: false,
        favoritesCount: 0
      }
    ];
    const testee = shallow(
      <ArticlesList articles={articles} fetchArticles={mockFetch} />
    );
    expect(testee).toBeDefined();
    expect(mockFetch).toHaveBeenCalled();
    // console.log(testee.debug());
  });
});
