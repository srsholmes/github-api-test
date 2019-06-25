import axios from 'axios';

export const GITHUB_URL_AND_HEADERS = {
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`
  }
};

export const SEARCH_USERS = `
  query ($user: String!) {
    search(query: $user, type: USER, first: 10) {
      edges {
        node {
          ... on User {
            avatarUrl,
            name,
            login
          }
        }
      }
    }
  }
`;

export const ACTIVITY = `
  query ($user: String!) {
    repositoryOwner(login: $user) {
      ... on User {
        login
        avatarUrl
        contributionsCollection {
          startedAt
          endedAt
          commitContributionsByRepository(maxRepositories:10) {
            repository {
              name,
              url
            }
            contributions(first:5) {
              edges {
                node {
                  url
                  occurredAt
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const searchUser = async val => {
  const res = await axios({
    method: 'POST',
    url: GITHUB_URL_AND_HEADERS.baseURL,
    headers: GITHUB_URL_AND_HEADERS.headers,
    data: {
      query: SEARCH_USERS,
      variables: {user: val}
    }
  });
  return res.data.data.search.edges;
};

export const getUserActivity = async val => {
  const res = await axios({
    method: 'POST',
    url: GITHUB_URL_AND_HEADERS.baseURL,
    headers: GITHUB_URL_AND_HEADERS.headers,
    data: {
      query: ACTIVITY,
      variables: {user: val}
    }
  });
  return res.data.data.repositoryOwner.contributionsCollection
    .commitContributionsByRepository;
};
