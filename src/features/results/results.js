import React from 'react';

export default function Results(props) {

  return (
    <div className='main-page'>
      
      <div className='results'>
        {props.children.map((result) => (
          <div className='result'>
            <p>{result.data.title}</p>
            <p>{result.data.num_comments}</p>
            <img src={result.data.thumbnail} alt='' align='bottom'/>
          </div>
          ))}
      </div>
    </div>
    )
}