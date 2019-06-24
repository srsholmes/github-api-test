import React from 'react';

/* eslint-disable no-ternary */
export const SearchResults = ({results}) => {
  console.log({results});
  return (
    <ul>
      {results.length ? (
        results.map(({node}) => (
          <li>
            <img src={node.avatarUrl} alt={node.name} />
            <p>{node.name}</p>
          </li>
        ))
      ) : (
        <h3>No results found, please try a different search term</h3>
      )}
    </ul>
  );
};
