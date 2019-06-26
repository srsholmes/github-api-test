import mockAxios from 'axios';

import {
  getUserActivity,
  ACTIVITY,
  SEARCH_USERS,
  searchUser,
  GITHUB_URL_AND_HEADERS
} from './github';

jest.mock('axios');

describe('Github API', () => {
  it('GITHUB_URL_AND_HEADERS has the correct URL and headers info', () => {
    expect(GITHUB_URL_AND_HEADERS).toStrictEqual({
      baseURL: 'https://api.github.com/graphql',
      headers: {
        Authorization: 'bearer undefined'
      }
    });
  });

  it('searchUser is called with the correct params', async () => {
    const MOCK_USER_RESPONSE = {
      data: {
        search: {
          edges: [1, 2, 3]
        }
      }
    };
    mockAxios.mockImplementationOnce(() =>
      Promise.resolve({data: MOCK_USER_RESPONSE})
    );
    await searchUser('testUser');
    expect(mockAxios).toHaveBeenCalledWith({
      data: {
        query: SEARCH_USERS,
        variables: {user: 'testUser'}
      },
      headers: {Authorization: 'bearer undefined'},
      method: 'POST',
      url: 'https://api.github.com/graphql'
    });
  });

  it('getUserActivity is called with the correct params', async () => {
    const MOCK_ACTIVITY_RESPONSE = {
      data: {
        repositoryOwner: {
          contributionsCollection: {
            commitContributionsByRepository: [1, 2, 3]
          }
        }
      }
    };
    mockAxios.mockImplementationOnce(() =>
      Promise.resolve({data: MOCK_ACTIVITY_RESPONSE})
    );
    await getUserActivity('testUser');
    expect(mockAxios).toHaveBeenCalledWith({
      data: {
        query: ACTIVITY,
        variables: {user: 'testUser'}
      },
      headers: {Authorization: 'bearer undefined'},
      method: 'POST',
      url: 'https://api.github.com/graphql'
    });
  });

  it('searchUser will throw an error if axios errors', async () => {
    const MOCK_BROKEN_ACTIVITY_RESPONSE = {
      data: {
        brokenData: {}
      }
    };
    mockAxios.mockImplementationOnce(() =>
      Promise.resolve({data: MOCK_BROKEN_ACTIVITY_RESPONSE})
    );
    try {
      await searchUser('testUser');
    } catch (err) {
      expect(err.message).toEqual('Error from Github API');
    }
  });

  it('getUserActivity will throw an error if axios errors', async () => {
    mockAxios.mockImplementationOnce(() => Promise.resolve({data: {}}));
    try {
      await getUserActivity('testUser');
    } catch (err) {
      expect(err.message).toEqual('Error from Github API');
    }
  });
});
