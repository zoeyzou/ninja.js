import React from 'react';

const Search = ({ onSearch, placeholder = 'Søg brugere' }) => {
  const searchHandler = (event) => {
    // parse the string if needed here
    onSearch(event.target.value);
  };

  return (
    <div className='p-b-1'>
      <input
        type='search'
        className='form-control'
        placeholder={placeholder}
        onChange={searchHandler}
      />
    </div>
  );
};

export default Search;
