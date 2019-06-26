import React, {useState, useEffect} from 'react';
import styles from './App.scss';
import {SearchResults} from './components/SearchResults';
import {SearchInput} from './components/SearchInput';
import {useDebounce} from './hooks/debounce';
import {Loader} from './components/Loader';
import {searchUser} from './api/github';

export const App = () => {
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const debouncedSearchTerm = useDebounce(searchInput, 500);

  const setInputAndLoader = e => {
    setSearchInput(e.target.value);
    if (error) {
      setError(false);
    }
    setIsLoading(true);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchUser(debouncedSearchTerm)
        .then(x => {
          setResults(x);
          setIsLoading(false);
        })
        .catch(() => {
          setError(true);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
      setResults([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className={styles.wrapper}>
      <SearchInput setInput={setInputAndLoader} value={searchInput} />
      {error && (
        <p data-testid="user-results-error" className={styles.error}>
          Something went wrong, please try again!
        </p>
      )}
      {isLoading && <Loader />}
      {!isLoading && searchInput.length > 0 && !error && (
        <SearchResults results={results} />
      )}
    </div>
  );
};

export default App;
