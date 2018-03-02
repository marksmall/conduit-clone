const ARTICLES = require('../data/articles.js');

const fetchArticles = (req, res) => {
  res.json(ARTICLES);
};

module.exports = {
  fetchArticles
};
