import React, { useState }  from "react";

import Results from '../features/results/results';
import SearchBar from '../components/searchBar';
import Filter from '../components/filter';

export default function App() {
  const [children, setChildren] = useState([]);

  const fetchData = (search) => {
    fetch(`https://www.reddit.com/search.json?q=${search}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setChildren(data.data.children)
      })
  }

  return (
    <div className="App">
      <div className='heading'>
        <h1>Read It?</h1>
        <div className='icon'></div>
      </div>
      <div className='components'>
        <SearchBar onSearch={fetchData} />
        <Filter />
        <div className='results-container'>
          <Results children={children}/>
        </div>
      </div>
    </div>
  );
}
