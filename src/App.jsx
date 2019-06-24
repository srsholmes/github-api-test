import React, {useState} from 'react';
import {useDebounce} from './hooks/debounce';
import {Loader} from './components/loader';

const App = () => {
  const [searchInput, changeInput] = useState('');
  const [results, setResults] = useState([]);
  const debouncedSearchTerm = useDebounce(searchInput, 500);
  console.log({debouncedSearchTerm});
  const setSearchInput = (e) => {
    changeInput(e.target.value);
  };
  return (
    <>
      <h3>Please search for a Github User:</h3>
      <input type="text" value={searchInput} onChange={setSearchInput}/>
      {searchInput.length > 0 && results.length === 0 && (
        <Loader/>
      )}
    </>
  );
};

export default App;
