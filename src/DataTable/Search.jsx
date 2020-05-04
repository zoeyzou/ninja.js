import React from 'react';

const Search = ({ onSearch }) => {
  const searchHandler = (event) => {
    // parse the string if needed here
    onSearch(event.target.value);
  };

  return (
    <div className='p-b-1'>
      <input
        type='search'
        className='form-control'
        placeholder='Søg brugere'
        onChange={searchHandler}
      />
    </div>
  );
};

export default Search;
