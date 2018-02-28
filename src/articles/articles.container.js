import { connect } from 'react-redux';

import ArticlesList from './articles-list.component';
import { fetchArticles } from './articles.actions';
import { getArticles } from './articles.reducer';

const mapStateToProps = state => {
  return {
    articles: getArticles(state)
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
