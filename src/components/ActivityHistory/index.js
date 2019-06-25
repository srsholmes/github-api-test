import React from 'react';
import styles from './styles.scss';

export const ActivityHistory = ({activity}) => {
  return (
    <>
      <h4 className={styles.title}>Recent commit activity:</h4>
      <ul>
        {activity.map((x, i) => {
          return (
            <>
              <li className={styles.repo} key={i}>
                <p className={styles.repoName}>{x.repository.name}</p>
              </li>
              <p>Commit Times:</p>
              <ul>
                {x.contributions.edges.map(({node: {occurredAt}}, j) => (
                  <li key={j}>{occurredAt}</li>
                ))}
              </ul>
            </>
          );
        })}
      </ul>
    </>
  );
};
