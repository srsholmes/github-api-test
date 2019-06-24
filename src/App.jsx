import React, {useState} from 'react';
import {Loader} from './components/loader';

const App = () => {
  const [searchInput, changeInput] = useState('');
  const [results, setResults] = useState([]);
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
