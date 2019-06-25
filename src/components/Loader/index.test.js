import React from 'react';
import {render} from '@testing-library/react';
import {Loader} from './index';

describe('Loader', () => {
  it('displays only the loader', () => {
    const {container} = render(<Loader />);
    expect(container).toMatchSnapshot();
  });
});
