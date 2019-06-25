import React from 'react';
import styles from './styles.scss';

export const ActivityHistory = ({activity, username}) => {
  if (activity.length === 0) {
    return (
      <h4 data-testid="no-activity" className={styles.title}>
        No Activity Found
      </h4>
    );
  }
  return (
    <>
      <h4 className={styles.title}>Commit activity:</h4>
      <ul className={styles.activityWrapper}>
        {activity.length > 0
          && activity.map((x, i) => {
            return (
              <li key={i} className={styles.repo}>
                <p className={styles.repoName}>
                  <a
                    target={'_blank'}
                    href={`http://github.com/${username}/${x.repository.name}`}
                  >
                    {x.repository.name}
                  </a>
                </p>
                <p>Recent Commit History Dates:</p>
                <ul className={styles.commitsWrapper}>
                  {x.contributions.edges.length > 0
                    && x.contributions.edges.map(
                      ({node: {occurredAt, url}}, j) => (
                        <li className={styles.commitTime} key={j}>
                          <a target="_blank" href={url}>
                            {new Date(`${occurredAt}`).toDateString()}
                          </a>
                        </li>
                      )
                    )}
                </ul>
              </li>
            );
          })}
      </ul>
    </>
  );
};
