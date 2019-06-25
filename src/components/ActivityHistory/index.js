import React from 'react';
import styles from './styles.scss';

export const ActivityHistory = ({activity}) => {
  return (
    <>
      <h4 className={styles.title}>Recent commit activity:</h4>
      <ul className={styles.activityWrapper}>
        {activity.map((x) => {
          return (
            <li className={styles.repo}>
              <p className={styles.repoName}>{x.repository.name}</p>
              <p>Commit Times:</p>
              <ul>
                {x.contributions.edges.map(({node: {occurredAt}}, j) => (
                  <li key={j}>{occurredAt}</li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
};
