import React from 'react';
import styles from './styles.scss';
import {CommitHistory} from '../CommitHistory';

export const ActivityHistory = ({activities}) => {
  if (activities.length === 0) {
    return (
      <h4 data-testid="no-activity" className={styles.title}>
        No Activity Found
      </h4>
    );
  }
  return (
    <>
      <h4 className={styles.title}>Recent repo activity:</h4>
      <ul className={styles.activityWrapper}>
        {activities.map((activity, i) => {
          return (
            <li key={i} className={styles.repo}>
              <p className={styles.repoName}>
                <a target={'_blank'} href={activity.repository.url}>
                  {activity.repository.name}
                </a>
              </p>
              <CommitHistory activity={activity} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
