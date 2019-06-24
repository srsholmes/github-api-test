import React, {useState, useEffect} from 'react';
import styles from './App.scss';
import {SearchResults} from './components/SearchResults';
import {SearchInput} from './components/SearchInput';
import {useDebounce} from './hooks/debounce';
import {Loader} from './components/Loader';
import {searchUser} from './api/github';

const App = () => {
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedSearchTerm = useDebounce(searchInput, 500);

  const setInputAndLoader = e => {
    setSearchInput(e.target.value);
    setIsLoading(true);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchUser(debouncedSearchTerm).then(x => {
        setResults(x);
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
      {isLoading && <Loader />}
      {!isLoading && searchInput.length > 0 && (
        <SearchResults results={results} />
      )}
    </div>
  );
};

export default App;
