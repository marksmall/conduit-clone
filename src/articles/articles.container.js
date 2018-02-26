import { connect } from 'react-redux';

import ArticlesList from './articles-list.component';
import { fetchArticles } from './articles.actions';

const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArticles: () => {
      dispatch(fetchArticles());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);
