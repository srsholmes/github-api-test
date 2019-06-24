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

export const searchUser = async val => {
  const res = await githubGraphQL.post('', {
    query: SEARCH_USERS,
    variables: {user: val}
  });
  return res.data.data.search.edges;
};
