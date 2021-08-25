import React, { useEffect, useState } from 'react';
import Nav from '../Nav';
import Row from '../Row';
import movies from '../movie_db.json';

function HomeScreen() {
  const genres = movies.map(movie => movie?.genres);

  const finalArray = [...genres];

  console.log(finalArray);

  let flattened = finalArray.reduce((acc, curVal) => acc.concat(curVal), []);
  console.log(flattened);
  //let uniqueValuesArray = [...new Set(flattened)];

  //console.log(uniqueValuesArray);

  return (
    <div className='homescreen'>
      <Nav />

      <div
        style={{
          color: 'white',
          padding: '20px',
          fontFamily: 'cursive',
          paddingTop: '120px',
        }}
      >
        {flattened.map(title => (
          <>
            {console.log(title)}
            <h2>{title}</h2>
            <Row title={title} />
          </>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
