import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import App from './components/layouts/App';
import Home from './components/main/Home';
import StoryList from './components/stories/StoryList';
import Story from './components/stories/Story';

module.exports = (
  <Route name='app' path='/' handler={App}>
    <DefaultRoute handler={Home} />
    <Route path='/stories' handler={StoryList} />
    <Route path='/stories/:id' handler={Story} />
  </Route>
);