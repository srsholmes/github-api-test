import React from 'react';
import {render, getAllByTestId, fireEvent} from '@testing-library/react';
import {SearchResults} from './index';

import * as dependency from '../../api/github';

jest.mock('../../api/github', () => ({
  getUserActivity: jest.fn(() => Promise.resolve([]))
}));

describe('SearchResults', () => {
  const MOCK_RESULTS = [
    {
      node: {
        avatarUrl: 'https://avatars3.githubusercontent.com/u/39902?v=4',
        name: 'Ben Straub',
        login: 'ben'
      }
    },
    {
      node: {
        avatarUrl: 'https://avatars3.githubusercontent.com/u/282759?v=4',
        name: 'Ben Balter',
        login: 'benbalter'
      }
    },
    {
      node: {
        avatarUrl: 'https://avatars0.githubusercontent.com/u/5750?v=4',
        name: 'Ben Newman',
        login: 'benjamn'
      }
    }
  ];

  it('displays the message when there are no results', () => {
    const {container} = render(<SearchResults results={[]} />);
    expect(container).toMatchSnapshot();
  });

  it('Results have the Get User Activity button', () => {
    const {container} = render(<SearchResults results={MOCK_RESULTS} />);
    const [button] = getAllByTestId(container, 'test-get-activity');
    expect(button.textContent).toBe('Get User Activity');
    fireEvent.click(button);
    expect(dependency.getUserActivity).toHaveBeenCalledTimes(1);
    expect(dependency.getUserActivity).toBeCalledWith('ben');
  });

  it('displays results when there are results', () => {
    const {container} = render(<SearchResults results={MOCK_RESULTS} />);
    expect(container).toMatchSnapshot();
  });
});
