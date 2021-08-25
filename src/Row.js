import API from './api/api';
import React, { useEffect, useState } from 'react';
import './Row.css';
import MOVIES from './movie_db.json';

function Row({ title }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(getFilterObjectItems(MOVIES, title));
  }, []);

  function getFilterObjectItems(movieObjects, title) {
    // Filtered Objects
    return movieObjects
      .map(movie => {
        if (movie.genres.includes(title)) {
          return movie;
        }
      })
      .filter(movie => movie);
  }

  return (
    <div className='row'>
      <div className='row__posters'>
        {movies.map(
          movie =>
            movie && (
              <>
                <div style={{ padding: '20px' }} key={movie?.id}>
                  <img
                    src={movie?.backdrop}
                    style={{
                      width: '300px',
                      height: '200px',
                      display: 'flex',
                      borderRadius: '10px',
                    }}
                  />
                  <h2 style={{ fontSize: '15px' }}>{movie?.title}</h2>
                  <h3 style={{ fontSize: '10px' }}>
                    IMDB Rating:{movie?.imdb_rating}
                  </h3>
                </div>
              </>
            )
        )}
      </div>
    </div>
  );
}

export default Row;
