import React, { useState } from 'react';

export default function SearchBar (props) {

  const [search, setSearch] = useState('');

  const onSearchHandler = (e) => {
    e.preventDefault();
    props.onSearch(search);
  }

  const changeHandler = (e) => {
    const userInput = e.target.value;
    setSearch(userInput);
  }

  return (
    <form onSubmit={onSearchHandler} className="search-bar">
      <input type="text" onChange={changeHandler}placeholder='search' className="search" />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
}