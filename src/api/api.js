
  export const fetchData = () => {
    fetch("https://www.reddit.com/r/popular.json")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }
