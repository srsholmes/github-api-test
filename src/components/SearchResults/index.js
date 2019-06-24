import React from 'react';
import styles from './styles.scss';
/* eslint-disable no-ternary */
export const SearchResults = ({results}) => {
  return (
    <ul className={styles.wrapper}>
      {results.length ? (
        results.map(({node}) => (
          <li key={node.avatarUrl} className={styles.result}>
            <img
              className={styles.avatar}
              src={node.avatarUrl}
              alt={node.name}
            />
            <div className={styles.infoWrapper}>
              <div className={styles.info}>
                <span className={styles.title}>{'Name:'}</span>
                <span>{node.name}</span>
              </div>
              <div className={styles.info}>
                <span className={styles.title}>{'Username:'}</span>
                <span>{node.login}</span>
              </div>
            </div>
          </li>
        ))
      ) : (
        <h3 className={styles.error}>
          No results found, please try a different search term
        </h3>
      )}
    </ul>
  );
};
