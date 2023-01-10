

export default function Filter (props) {

  const handleChange = (e) => {
    e.preventDefault();
    const filter = e.target.value;
    props.onFilter(filter);
  }

    return (
        <div className='filter'>
          <label for='categories'>Filter Results by a Category: </label>
          <select onChange={handleChange}name='categories' id='categories' required>
            <option value='relevance'>Relevance</option>
            <option value='hot'>Hot</option>
            <option value='top'>Top</option>
            <option value='new'>New</option>
            <option value='comments'>Most Comments</option>
          </select>
        </div>
    )
}