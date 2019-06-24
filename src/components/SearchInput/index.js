import React from 'react';
import styles from './styles.scss';
export const SearchInput = ({value, setInput}) => {
  return (
    <>
      <h3 className={styles.title}>Please search for a Github User:</h3>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={setInput}
      />
    </>
  );
};
