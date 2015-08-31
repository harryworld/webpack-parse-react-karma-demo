import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Story from '../Story';

describe('Story', () => {
  it('renders', () => {
    let element = TestUtils.renderIntoDocument(<Story />);
    expect(element).toBeTruthy();
  });
});