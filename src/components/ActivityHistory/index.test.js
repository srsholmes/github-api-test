import React from 'react';
import {render, getByTestId} from '@testing-library/react';
import {ActivityHistory} from './index';
import {MOCK_ACTIVITY} from '../../../testUtils/mockData';

describe('ActivityHistory', () => {
  it('displays a message when there is no activity', () => {
    const {container} = render(<ActivityHistory activity={[]} />);
    const button = getByTestId(container, 'no-activity');
    expect(button.textContent).toBe('No Activity Found');
  });

  it('displays the activities with the contributions', () => {
    const {container} = render(<ActivityHistory activity={MOCK_ACTIVITY} />);
    expect(container).toMatchSnapshot();
  });
});
