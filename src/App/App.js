import React, { useState, useEffect }  from "react";

import Results from '../features/results/results';
import SearchBar from '../components/searchBar';
import Filter from '../components/filter';

export default function App() {
  const [children, setChildren] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  const onSearch = (e) => {
    setSearch(e);
  }

  const onFilter = (e) => {
    setFilter(e);
  }

  const fetchData = () => {
    if(filter===''){
      fetch(`https://www.reddit.com/search.json?q=${search}`)
        .then(response => {
          return response.json()
        })
        .then(data => {
          setChildren(data.data.children)
        })
      }
    fetch(`https://www.reddit.com/search.json?q=${search}&type=link&sort=${filter}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setChildren(data.data.children)
      })
  }

  useEffect(()=>{
    fetchData()
  }, [search, filter])

  return (
    <div className="App">
      <div className='heading'>
        <h1>Read It?</h1>
        <div className='icon'></div>
      </div>
      <div className='components'>
        <SearchBar onSearch={onSearch} />
        <Filter onFilter={onFilter} />
        <div className='results-container'>
          <Results children={children}/>
        </div>
      </div>
    </div>
  )
}
