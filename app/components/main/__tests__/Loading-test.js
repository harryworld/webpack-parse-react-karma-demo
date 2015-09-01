import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Loading from '../Loading';

describe('Loading', () => {
  it('renders', () => {
    let element = TestUtils.renderIntoDocument(<Loading />);
    expect(element).toBeTruthy();
  });

  it('shows loading');
});