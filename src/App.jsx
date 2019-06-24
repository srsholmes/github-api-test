import React, {useState, useEffect} from 'react';
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
  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsLoading(true);
      searchUser(debouncedSearchTerm).then(x => {
        setResults(x);
        setIsLoading(false);
      });
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);
  console.log({isLoading});
  return (
    <>
      <SearchInput setInput={setSearchInput} value={searchInput} />
      {isLoading && <Loader />}
      <SearchResults results={results} />
    </>
  );
};

export default App;
