import React from 'react';
import renderer from 'react-test-renderer';

import Title from './Title';

describe('Movie list', () => {

  it('renders correctly title component', () => {
    const tree = renderer.create(<Title />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
