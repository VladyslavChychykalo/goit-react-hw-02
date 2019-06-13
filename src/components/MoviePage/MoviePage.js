import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import MovieGrid from './MovieGrid/MovieGrid';

const MoviePage = () => (
  <div className="container">
    <SearchBar />
    <MovieGrid />
  </div>
);

export default MoviePage;
