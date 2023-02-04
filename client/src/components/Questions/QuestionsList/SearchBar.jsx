import React, { useState } from "react";
import useSearchInput from '.././hooks/useSearchInput.jsx';
import styles from "../questions.module.css";

function SearchBar({filterQList}) {
  const [searchInput, handleSearch] = useSearchInput();

  var handleChange = (e) => {
    handleSearch(e.target.value, filterQList);
  }

  return (
    <input className={styles.searchBar}
      type='text'
      placeholder='Have a question? Search for more answers...'
      onChange={handleChange}
      value={searchInput} />
  )
};

export default SearchBar;