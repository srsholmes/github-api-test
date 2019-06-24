import React, {useState, useEffect} from 'react';
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
      <h3>Please search for a Github User:</h3>
      <input
        type="text"
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
      />
      {isLoading && (
        <Loader/>
      )}
    </>
  );
};

export default App;
