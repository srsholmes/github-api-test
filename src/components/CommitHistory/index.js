import React from 'react';
import styles from './styles.scss';

export const CommitHistory = ({activity}) => {
  return (
    <div className={styles.wrapper}>
      <p>Commit History Dates:</p>
      <ul className={styles.commitsWrapper}>
        {activity.contributions.edges.map(
          ({node: {occurredAt, url}}, j) => (
            <li className={styles.commitTime} key={j}>
              <a target="_blank" href={url}>
                {new Date(`${occurredAt}`).toDateString()}
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
