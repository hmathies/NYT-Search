import React from 'react';

const Jumbotron = ({ children }) =>
  <div style={{ height: 400, clear: 'both'}} className='Jumbotron'>
    {children}
  </div>;

export default Jumbotron;
