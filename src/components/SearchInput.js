import React from 'react';

export const SearchInput = ({value, setInput}) => {
  return (
    <>
      <h3>Please search for a Github User:</h3>
      <input
        type="text"
        value={value}
        onChange={e => setInput(e.target.value)}
      />
    </>
  );
};
