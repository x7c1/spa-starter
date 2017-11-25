import React from 'react';
import { Link } from 'react-router-dom';
import './CoreLayout.scss';

export const CoreLayout = props => {
  return (
    <div className='core-layout'>
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
