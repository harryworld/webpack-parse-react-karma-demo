import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import StoryList from '../StoryList';

describe('StoryList', () => {
  it('renders', () => {
    let element = TestUtils.renderIntoDocument(<StoryList />);
    expect(element).toBeTruthy();
  });
});