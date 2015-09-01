import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Footer from '../Footer';

describe('Footer', () => {
  it('renders', () => {
    let element = TestUtils.renderIntoDocument(<Footer />);
    expect(element).toBeTruthy();
  });
});