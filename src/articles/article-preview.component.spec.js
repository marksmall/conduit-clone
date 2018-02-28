import React from 'react';
import { shallow } from 'enzyme';

import ArticlePreview from './article-preview.component';

describe('ArticlePreview Component', () => {
  let article;

  beforeEach(() => {
    article = {
      title: 'How to train your dragon',
      slug: 'how-to-train-your-dragon-kj1m3z',
      body: 'Very carefully.',
      createdAt: '2018-02-28T14:55:59.091Z',
      updatedAt: '2018-02-28T14:55:59.091Z',
      tagList: ['training', 'dragons'],
      description: 'Ever wonder how?',
      author: {
        username: 'johnnyjacob',
        bio: null,
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false
      },
      favorited: false,
      favoritesCount: 0
    };
  });

  it('Render preview of an Article', () => {
    const testee = shallow(
      <ArticlePreview article={article} key={article.slug} />
    );
    // console.log(testee.debug());
    const title = <h1>{article.title}</h1>;
    const description = <p>{article.description}</p>;
    expect(testee).toContainReact(title);
    expect(testee).toContainReact(description);
  });
});
