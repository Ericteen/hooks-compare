import React, { useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Movie from "../components/Movie";
import useMovie from "../hooks/useMovie";
import "./App.css";

function App() {
  const { movies, search, setSearch, isLoading } = useMovie();
  const [movieTitle, setMovieTitle] = useState(search);
  function handleChange(evt) {
    setMovieTitle(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    setSearch(movieTitle);
  }

  return (
    <div className="app">
      <Header title="React hooks" />
      <Search
        movieTitle={movieTitle}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <p className="intro">Sharing a few of our favorite movies</p>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div className="movies">
          {movies.map((movie) => (
            <Movie
              title={movie.Title}
              year={movie.Year}
              poster={movie.Poster}
              key={movie.imdbID}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
