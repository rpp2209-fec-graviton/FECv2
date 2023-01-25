import React, { useState } from "react";

function SearchBar(props) {
  /*Implementation Tasks
    1. automatically filters Questions with 3 or more characters
  */

  const [searchInput, setSearchInput] = useState('');

  var handleChange = (e) => {
    setSearchInput(search);

  };
  return (
    <input
      type='text'
      placeholder='Have a question? Search for more answers...'
      onChange={handleChange}
      value={searchInput} />
  )
};

export default SearchBar;