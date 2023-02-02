import React, {useState} from "react";

export default function useSearchInput() {
  const [searchInput, setSearchInput] = useState('');

  var handleSearch = (text, filterQList) => {
    setSearchInput(text);
    if (text.length >= 3) {
      filterQList(text);
    }
  }

  return [searchInput, handleSearch];
}