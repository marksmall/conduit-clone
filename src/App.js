import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from 'layout/header.component';
import Banner from 'layout/banner.component';
import Footer from 'layout/footer.component';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header appName={this.props.appName} />
        <Banner appName={this.props.appName} />
        <Footer appName={this.props.appName} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, () => ({}))(App);
