

export default function Filter () {

    return (
        <div className='filter'>
          <label for='categories'>Filter Results by a Category: </label>
          <select name='categories' id='categories' required>
            <option value='category 1'>Category 1</option>
            <option value='category 2'>Category 2</option>
            <option value='category 3'>Category 3</option>
          </select>
        </div>
    )
}