import React, { useEffect, useState } from 'react';

// import { data as result } from '../../api/api';

export default function Results() {
  const [children, setChildren] = useState([]);
  

  const fetchData = () => {
    fetch("https://www.reddit.com/search.json?q=hockey")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setChildren(data.data.children)
      })
  }

  useEffect(() => {
    fetchData();
    
  }, [])

  return (
    <div className='results'>
      {children.map((result) => (
        <div className='result'>
          <p>{result.data.title}</p>
          <p>{result.data.num_comments}</p>
          <img src={result.data.thumbnail} alt='' align='bottom'/>
        </div>
      ))}
    </div>
    )
}