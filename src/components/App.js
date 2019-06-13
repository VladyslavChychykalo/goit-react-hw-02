import React, { Fragment } from 'react';
import Reader from './Reader/Reader';
import MoviePage from './MoviePage/MoviePage';
import Dashboard from './Dashboard/Dashboard';
import publication from '../path/to/publication.json';

const App = () => (
  <Fragment>
    <Reader items={publication} />
    <MoviePage />
    <Dashboard />
  </Fragment>
);

export default App;
