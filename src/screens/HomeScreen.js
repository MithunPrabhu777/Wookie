import React, { useEffect, useState } from 'react';
import Nav from '../Nav';
import Row from '../Row';
import moovies from '../movie_db.json';

function HomeScreen() {
  //   const gen = value.map(gen => gen);

  const [category, setCategory] = useState([]);

  useEffect(() => {
    setCategory(actionFunction());
  }, []);

  const actionFunction = () => {
    const genres = moovies.map(genres => genres);
    console.log(genres);
    return genres;
  };

  console.log(category);
  //   const gen1 = genres
  //     .filter(genre => genre)
  //     .map((genre, i) => {
  //       console.log(genre, i);
  //     });

  //   console.log(gen1);
  return (
    <div className='homescreen' action={category}>
      <Nav />

      <div
        style={{
          color: 'white',
          padding: '20px',
          fontFamily: 'cursive',
          paddingTop: '120px',
        }}
      >
        <h2>Action</h2>
        <Row title='Action' />
        <h2>Adventure</h2>
        <Row title='Adventure' />
        <h2>Crime</h2>
        <Row title='Crime' />
        <h2>Drama</h2>
        <Row title='Drama' />
        <h2>Sci-Fi</h2>
        <Row title='Sci-Fi' />
        <h2>Biography</h2>
        <Row title='Biography' />
        <h2>History</h2>
        <Row title='History' />
        <h2>Thriller</h2>
        <Row title='Thriller' />
        <h2>Mystery</h2>
        <Row title='Mystery' />
        <h2>Animation</h2>
        <Row title='Animation' />
        <h2>Romance</h2>
        <Row title='Romance' />
      </div>
    </div>
  );
}

export default HomeScreen;
