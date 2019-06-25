import axios from 'axios';

const githubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`
  }
});

const SEARCH_USERS = `
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

const ACTIVITY = `
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
            }
            contributions(first:5) {
              edges {
                node {
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
  const res = await githubGraphQL.post('', {
    query: SEARCH_USERS,
    variables: {user: val}
  });
  console.log({res});
  return res.data.data.search.edges;
};

export const getUserActivity = async val => {
  const res = await githubGraphQL.post('', {
    query: ACTIVITY,
    variables: {user: val}
  });
  return res.data.data.repositoryOwner.contributionsCollection
    .commitContributionsByRepository;
};
