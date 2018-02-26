import React, { Component } from 'react';

import './articles-list.component.css';

class ArticlesList extends Component {
  componentWillMount() {
    this.props.fetchArticles();
  }

  render() {
    const { articles } = this.props;

    if (!articles) {
      return <div className="article-preview">Loading...</div>;
    }

    if (articles.length === 0) {
      return (
        <div className="article-preview">No articles are here... yet.</div>
      );
    }

    return (
      <div>
        {articles.map(({ title }, index) => {
          return <h2 key={index}>{title}</h2>;
        })}
      </div>
    );
  }
}

export default ArticlesList;
