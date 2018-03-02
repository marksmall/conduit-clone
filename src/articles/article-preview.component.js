import React from 'react';
import { Link } from 'react-router-dom';

import styles from './article-preview.module.css';

const ArticlePreview = props => {
  const article = props.article;

  return (
    <div className={styles['article-preview']}>
      <div className={styles['article-meta']}>
        <a>
          <img src={article.author.image} alt="Author" />
        </a>

        <div className={styles['author-details']}>
          <div className={styles['info']}>
            <a href="#" className={styles['author']}>
              {article.author.username}
            </a>
            <span className={styles['date']}>
              {new Date(article.createdAt).toDateString()}
            </span>
          </div>

          <div className="float-sm-right">
            <button className="btn btn-sm btn-outline-success">
              <i className="ion-heart" /> {article.favoritesCount}
            </button>
          </div>
        </div>
      </div>

      <Link to={`article/${article.slug}`} className={styles['preview-link']}>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {article.tagList.map(tag => {
            return (
              <li className="tag-default tag-pill tag-outline" key={tag}>
                {tag}
              </li>
            );
          })}
        </ul>
      </Link>
    </div>
  );
};

export default ArticlePreview;
