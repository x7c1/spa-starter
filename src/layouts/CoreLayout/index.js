import React from 'react';
import { Link } from 'react-router-dom'

export const CoreLayout = props => {
  return (
    <div className='react-sample-area'>
      <h3>Hello, React!</h3>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sample-page">Sample Page</Link></li>
        </ul>
      </nav>
      {props.children}
    </div>
  );
};
