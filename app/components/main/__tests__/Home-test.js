import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Home from '../Home';

describe('Home', () => {
  it('renders', () => {
    let element = TestUtils.renderIntoDocument(<Home />);
    expect(element).toBeTruthy();
  });
});