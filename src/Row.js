import API from './api/api';
import React, { useEffect, useState } from 'react';
import './Row.css';
import moovies from './movie_db.json';
import { MovieSharp } from '@material-ui/icons';

function Row(props) {
  const title = props.title;
  console.log(title);
  const Movie = moovies;
  console.log(Movie);
  const [movie, setMovie] = useState(Movie);

  useEffect(() => {
    setMovie(getFilterObjectItems(Movie, title));
  }, []);

  // const filterItem = title => {
  //   const updatedItems = Movie.filter(curElem => {
  //     return curElem.genres === title;
  //   });

  //   setMovie(updatedItems);
  // };
  // console.log(movie);

  function getFilterObjectItems(objs, title) {
    // Filtered Objects
    return (
      Movie.map(function (obj) {
        // Creates a new Item
        console.log('oooobbbbbjjjjj', obj);
        var newObject = { id: obj.id, items: [] };

        //iterate through all items in an Object looking for items with matching Category
        obj.genres.forEach(function (item) {
          console.log('ittttteeeemmmm', item);
          // if one category entry matches add item to new Object
          //  the "some" function returns "true" or "false" if one item matches the critieria
          if (item.includes('action')) {
            // the original item will be added to the new item ist
            newObject.items.push(item);
            console.log('newObject', newObject);
          }
        });
        return newObject;
      })
        // filters all New Objects that don't have items
        .filter(newObject => newObject.items.length > -1)
    );
  }
  console.log(movie);
  return (
    <div className='row'>
      <div className='row__posters'>
        {movie.map(
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
