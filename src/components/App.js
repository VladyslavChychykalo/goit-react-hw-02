import React, { Fragment } from 'react';
import Reader from './Reader/Reader';
import publication from '../path/to/publication.json';

const App = () => (
  <Fragment>
    <Reader items={publication} />
  </Fragment>
);

export default App;
