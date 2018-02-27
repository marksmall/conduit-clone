import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import Redirect from 'react-router-dom/Redirect';

import Header from './layout/header.component';
import Banner from './layout/banner.component';
import Footer from './layout/footer.component';
import PageNotFound from './layout/page-not-found.component';

import ArticlesListContainer from './articles/articles.container';

import styles from './App.module.css';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header appName={this.props.appName} />
        <Banner appName={this.props.appName} />

        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <hr />

          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>

        <div>
          <Switch>
            <Route exact path="/articles" component={ArticlesListContainer} />
            <Redirect exact from="/" to="/articles" />
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <Footer appName={this.props.appName} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default withRouter(connect(mapStateToProps, () => ({}))(App));
