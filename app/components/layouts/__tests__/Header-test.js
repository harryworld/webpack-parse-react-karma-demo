import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Header from '../Header';

describe('Header', () => {
  it('renders', () => {
    let element = TestUtils.renderIntoDocument(<Header />);
    expect(element).toBeTruthy();
  });
});