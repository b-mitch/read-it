import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   NavLink,
//   useRouteMatch,
// } from "react-router-dom";

import Results from '../features/results/results';
import SearchBar from '../components/searchBar';
import Filter from '../components/filter';

export default function App() {
  return (
    <div className="App">
      <div className='heading'>
        <h1>Read It?</h1>
        <div className='icon'></div>
      </div>
      <div className='search-bar'>
        <SearchBar />
      </div>
      <div className='filter'>
        <Filter />
      </div>
      <div className='results'>
        <Results />
      </div>
    </div>
  );
}
