import React, { useEffect, useState } from 'react';


export default function Results() {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://www.reddit.com/r/popular.json")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='results'>
        <p>{users}</p>
    </div>
    )
}