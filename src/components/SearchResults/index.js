import React from 'react';
import styles from './styles.scss';
/* eslint-disable no-ternary */
export const SearchResults = ({results}) => {
  return (
    <ul className={styles.wrapper}>
      {results.length ? (
        results.map(({node}) => (
          <li className={styles.result}>
            <img className={styles.avatar} src={node.avatarUrl} alt={node.name} />
            <p className={styles.name}>{node.name}</p>
          </li>
        ))
      ) : (
        <h3 className={styles.error}>No results found, please try a different search term</h3>
      )}
    </ul>
  );
};
