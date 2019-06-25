import React from 'react';
import {render, getAllByTestId, fireEvent} from '@testing-library/react';
import {SearchResults} from './index';
import {MOCK_RESULTS} from '../../../testUtils/mockData';
import * as dependency from '../../api/github';

jest.mock('../../api/github', () => ({
  getUserActivity: jest.fn(() => Promise.resolve([]))
}));

describe('SearchResults', () => {
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
