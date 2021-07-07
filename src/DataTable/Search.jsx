import React from "react";

const Search = (props) => {
  const { onSearch } = props;

  const search = (e) => {
    onSearch(e);
  };
  return (
    <div className="p-b-1">
      <input
        type="search"
        className="form-control"
        placeholder="Søg brugere"
        onChange={search}
      />
    </div>
  );
};

export default Search;
