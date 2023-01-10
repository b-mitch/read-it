import React, { useState } from 'react';

export default function SearchBar (props) {

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const userInput = e.target[0].value;
    props.onSearch(userInput);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmitHandler} className="search-bar">
      <input type="text" placeholder='search' className="search" />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
}