import React, {useState, useEffect} from 'react';
import styles from './styles.scss';
import {ActivityHistory} from '../ActivityHistory';
import {getUserActivity} from '../../api/github';

/* eslint-disable no-ternary */
export const SearchResults = ({results}) => {
  const [userActivity, setUserActivity] = useState({});
  const [selectedUser, setSelectedUser] = useState('');
  useEffect(() => {
    if (selectedUser) {
      getUserActivity(selectedUser).then(x => {
        setUserActivity({...userActivity, [selectedUser]: x});
      });
    } else {
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
              {!userActivity[login] && (
                <button onClick={() => setSelectedUser(login)}>
                  Get User Activity
                </button>
              )}
              {userActivity[login] && (
                <ActivityHistory
                  username={login}
                  activity={userActivity[login]}
                />
              )}
            </div>
          </li>
        ))
      ) : (
        <p>No results found, please try a different search term</p>
      )}
    </ul>
  );
};
