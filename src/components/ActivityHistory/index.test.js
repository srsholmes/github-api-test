import React from 'react';
import {render, getByTestId} from '@testing-library/react';
import {ActivityHistory} from './index';

describe('ActivityHistory', () => {
  it('displays a message when there is no activity', () => {
    const {container} = render(<ActivityHistory activity={[]} />);
    const button = getByTestId(container, 'no-activity');
    expect(button.textContent).toBe('No Activity Found');
  });

  it('displays the activities with the contributions', () => {
    const MOCK_ACTIVITY = [
      {
        repository: {
          name: 'progit2'
        },
        contributions: {
          edges: [
            {
              node: {
                url:
                  'https://github.com/ben?tab=overview&from=2019-06-01&to=2019-06-30',
                occurredAt: '2019-06-19T07:00:00Z'
              }
            },
            {
              node: {
                url:
                  'https://github.com/ben?tab=overview&from=2019-06-01&to=2019-06-30',
                occurredAt: '2019-06-14T07:00:00Z'
              }
            },
            {
              node: {
                url:
                  'https://github.com/ben?tab=overview&from=2019-06-01&to=2019-06-30',
                occurredAt: '2019-06-02T07:00:00Z'
              }
            },
            {
              node: {
                url:
                  'https://github.com/ben?tab=overview&from=2019-06-01&to=2019-06-30',
                occurredAt: '2019-06-01T07:00:00Z'
              }
            },
            {
              node: {
                url:
                  'https://github.com/ben?tab=overview&from=2019-05-01&to=2019-05-31',
                occurredAt: '2019-05-13T07:00:00Z'
              }
            }
          ]
        }
      },
      {
        repository: {
          name: 'progit2-bg'
        },
        contributions: {
          edges: [
            {
              node: {
                url:
                  'https://github.com/ben?tab=overview&from=2019-05-01&to=2019-05-31',
                occurredAt: '2019-05-13T07:00:00Z'
              }
            },
            {
              node: {
                url:
                  'https://github.com/ben?tab=overview&from=2019-04-01&to=2019-04-30',
                occurredAt: '2019-04-15T07:00:00Z'
              }
            },
            {
              node: {
                url:
                  'https://github.com/ben?tab=overview&from=2019-04-01&to=2019-04-30',
                occurredAt: '2019-04-10T07:00:00Z'
              }
            },
            {
              node: {
                url:
                  'https://github.com/ben?tab=overview&from=2019-04-01&to=2019-04-30',
                occurredAt: '2019-04-04T07:00:00Z'
              }
            },
            {
              node: {
                url:
                  'https://github.com/ben?tab=overview&from=2019-03-01&to=2019-03-31',
                occurredAt: '2019-03-30T07:00:00Z'
              }
            }
          ]
        }
      },
      {
        repository: {
          name: 'ben.github.com'
        },
        contributions: {
          edges: [
            {
              node: {
                url:
                  'https://github.com/ben?tab=overview&from=2019-03-01&to=2019-03-31',
                occurredAt: '2019-03-11T07:00:00Z'
              }
            },
            {
              node: {
                url:
                  'https://github.com/ben?tab=overview&from=2019-03-01&to=2019-03-31',
                occurredAt: '2019-03-10T08:00:00Z'
              }
            },
            {
              node: {
                url:
                  'https://github.com/ben?tab=overview&from=2019-03-01&to=2019-03-31',
                occurredAt: '2019-03-09T08:00:00Z'
              }
            },
            {
              node: {
                url:
                  'https://github.com/ben?tab=overview&from=2019-02-01&to=2019-02-28',
                occurredAt: '2019-02-21T08:00:00Z'
              }
            },
            {
              node: {
                url:
                  'https://github.com/ben?tab=overview&from=2018-12-01&to=2018-12-31',
                occurredAt: '2018-12-12T08:00:00Z'
              }
            }
          ]
        }
      }
    ];
    const {container} = render(<ActivityHistory activity={MOCK_ACTIVITY} />);
    expect(container).toMatchSnapshot();
  });
});
