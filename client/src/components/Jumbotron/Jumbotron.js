import React from 'react';

const Jumbotron = ({ children }) =>
  <div style={{ height: 200, clear: 'both'}} className='Jumbotron'>
    {children}
  </div>;

export default Jumbotron;
