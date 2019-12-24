import React from 'react';

//NoPhoto component to handle if the search returns no results
const NoPhotos = () => (
    <li className='no-photos'>
    <h3>Sorry, no photos match your search.</h3>
    <p>Please return Home to retry your search.</p>
  </li>
);

export default NoPhotos;

