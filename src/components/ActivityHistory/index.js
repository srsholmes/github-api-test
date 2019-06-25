import React from 'react';
import styles from './styles.scss';

export const ActivityHistory = ({activity, username}) => {
  return (
    <>
      <h4 className={styles.title}>Recent commit activity:</h4>
      <ul className={styles.activityWrapper}>
        {activity.map(x => {
          return (
            <li className={styles.repo}>
              <p className={styles.repoName}>
                <a
                  target={'_blank'}
                  href={`http://github.com/${username}/${x.repository.name}`}
                >
                  {x.repository.name}
                </a>
              </p>
              <p>Commit History Times:</p>
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
