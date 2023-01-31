import React, { useState } from "react";
import useSearchInput from './hooks/useSearchInput.jsx';

function SearchBar({filterQList}) {
  const [searchInput, handleSearch] = useSearchInput();

  var handleChange = (e) => {
    handleSearch(e.target.value, filterQList);
    console.log('searchinput', searchInput);
  }

  return (
    <input
      type='text'
      placeholder='Have a question? Search for more answers...'
      onChange={handleChange}
      value={searchInput} />
  )
};

export default SearchBar;