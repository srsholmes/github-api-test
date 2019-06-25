import React, {useState, useEffect} from 'react';
import styles from './styles.scss';
import {ActivityHistory} from '../ActivityHistory';
import {getUserActivity} from '../../api/github';

/* eslint-disable no-ternary */
export const SearchResults = ({results}) => {
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  const [userActivity, setUserActivity] = useState({});
  const [selectedUser, setSelectedUser] = useState('');
  useEffect(() => {
    if (selectedUser) {
      getUserActivity(selectedUser).then(x => {
        setUserActivity({...userActivity, [selectedUser]: x});
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
      setUserActivity([]);
    }
  }, [selectedUser]);

  return (
    <ul className={styles.wrapper}>
      {results.length ? (
        results.map(({node: {name, avatarUrl, login}}) => (
          <li key={avatarUrl} className={styles.result}>
            <img className={styles.avatar} src={avatarUrl} alt={name} />
            <div className={styles.infoWrapper}>
              <div className={styles.info}>
                <span className={styles.title}>{'Name:'}</span>
                <span>{name}</span>
              </div>
              <div className={styles.info}>
                <span className={styles.title}>{'Username:'}</span>
                <span>{login}</span>
              </div>
              {/* eslint-disable-next-line no-unused-vars */}
              {
                !userActivity[login] && <button onClick={() => setSelectedUser(login)}>
                  Get User Activity
                </button>
              }
              {userActivity[login] && (
                <ActivityHistory activity={userActivity[login]} />
              )}
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
