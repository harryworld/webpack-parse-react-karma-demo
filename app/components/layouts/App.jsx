import React from 'react';
import { RouteHandler } from 'react-router';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <RouteHandler />
        <Footer />
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.func
};
