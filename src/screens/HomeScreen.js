import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import Row from "../Row";
import movies from "../movie_db.json";

function HomeScreen() {
  const genres = [...movies.map((movie) => movie.genres)];
  const genresArray = genres.reduce((acc, curVal) => acc.concat(curVal), []);
  const uniqueArray = [...new Set(genresArray)];

  return (
    <div className="homescreen">
      <Nav />

      <div
        style={{
          color: "white",
          padding: "20px",
          fontFamily: "cursive",
          paddingTop: "120px",
        }}
      >
        {uniqueArray.map((title) => (
          <>
            <h2>{title}</h2>
            <Row title={title} />
          </>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
