import React, {useRef, useEffect} from 'react';
import styles from './styles.scss';

export const SearchInput = ({value, setInput}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <h3 className={styles.title}>Please search for a Github User:</h3>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        value={value}
        onChange={setInput}
      />
    </>
  );
};
