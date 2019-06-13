import React from 'react';

const Publication = ({ item }) => (
  <article className="publication">
    <h2> {item.title} </h2> <p>{item.text}</p>{' '}
  </article>
);

// Publication.propTypes = {
//   item: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired,
//   }).isRequired,
// };
export default Publication;
