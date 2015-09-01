import React from 'react';
import Router from 'react-router';
import { Route, DefaultRoute } from 'react-router';

import Routes from '../../Routes';

describe('default route', () => {
  it('renders home', (done) => {
    Router.run(Routes, '/', (Handler) => {
      var html = React.renderToString(<Handler/>);
      expect(html).toMatch(/Home/);
      done();
    });
  });
});

describe('story route', () => {
  it('renders story list', (done) => {
    Router.run(Routes, '/stories', (Handler) => {
      var html = React.renderToString(<Handler/>);
      expect(html).toMatch(/Story List/);
      done();
    })
  });

  it('renders story detail', (done) => {
    Router.run(Routes, '/stories/1', (Handler) => {
      var html = React.renderToString(<Handler/>);
      expect(html).toMatch(/Story Detail/);
      done();
    })
  });
});