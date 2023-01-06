

export default function SearchBar () {

  return (
    <form onSubmit='' className="search-bar">
      <input type="text" placeholder='search' className="search" />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
}