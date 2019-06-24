import React, {useState, useEffect} from 'react';
import {SearchInput} from './components/SearchInput';
import {useDebounce} from './hooks/debounce';
import {Loader} from './components/loader';

const App = () => {
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedSearchTerm = useDebounce(searchInput, 500);
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsLoading(true);
      } else {
        setResults([]);
      }
    },
    [debouncedSearchTerm]
  );
  return (
    <>
      <SearchInput setInput={setSearchInput} value={searchInput}/>
      {isLoading && (
        <Loader/>
      )}
    </>
  );
};

export default App;
