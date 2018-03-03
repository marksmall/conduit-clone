import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import Redirect from 'react-router-dom/Redirect';

import Header from './layout/header.component';
import Banner from './layout/banner.component';
import Footer from './layout/footer.component';
import PageNotFound from './layout/page-not-found.component';

import ArticlesListContainer from './articles/articles.container';
import LoginContainer from './login/login.container';
import RegisterContainer from './register/register.container';

import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header appName={this.props.appName} />
        <Banner appName={this.props.appName} />

        <div className={styles.main}>
          <div className="col-md-9">
            <div className={styles['feed-toggle']}>
              <ul className="nav flex-row">
                <li className="nav-item">
                  <a className="nav-link">Global Feed</a>
                </li>
              </ul>
            </div>

            <Switch>
              <Route exact path="/articles" component={ArticlesListContainer} />
              <Route exact path="/login" component={LoginContainer} />
              <Route exact path="/signup" component={RegisterContainer} />
              <Redirect exact from="/" to="/articles" />
              <Route component={PageNotFound} />
            </Switch>
          </div>

          <div>
            <h5>Popular Tags</h5>
          </div>
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
