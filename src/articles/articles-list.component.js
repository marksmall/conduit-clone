import React, { Component } from 'react';

import styles from './articles-list.module.css';
import ArticlePreview from './article-preview.component';

class ArticlesList extends Component {
  componentWillMount() {
    this.props.fetchArticles();
  }

  render() {
    const { articles } = this.props;

    if (!articles) {
      return <div className="article-loading">Loading...</div>;
    }

    if (articles.length === 0) {
      return <div className="no-articles">No articles are here... yet.</div>;
    }

    return (
      <div>
        {articles.map(article => {
          return (
            <div key={article.slug} className="articles">
              <ArticlePreview article={article} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ArticlesList;
