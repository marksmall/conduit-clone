import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Redirect from 'react-router-dom/Redirect';

import Header from 'layout/header.component';
import Banner from 'layout/banner.component';
import Footer from 'layout/footer.component';

import ArticlesListContainer from 'articles/articles.container';

import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header appName={this.props.appName} />
        <Banner appName={this.props.appName} />
        <div>
          <Switch>
            <Route exact path="/articles" component={ArticlesListContainer} />
            <Redirect from="/" to="/articles" />
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

export default connect(mapStateToProps, () => ({}))(App);
