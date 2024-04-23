import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="bg-blue-100 h-screen w-screen flex flex-col justify-between">
      <div className="py-4">
        <ul className="flex flex-col space-y-4">
          <li className='bg-blue-300 text-white'>
            <Link to="/login">Login</Link>
          </li>
          <li className='bg-blue-300 text-white'>
            <Link to="/popup">Popup</Link>
          </li>
          <li className='bg-blue-300 text-white'>
            <Link to="/landing">Landing</Link>
          </li>
          <li className='bg-blue-300 text-white'>
            <Link to="/register">Register</Link>
          </li>
          <li className='bg-blue-300 text-white'>
            <Link to="/details">Lead Details</Link>
          </li>
          <li className='bg-blue-300 text-white'>
            <Link to="/telecaller">Telecaller Page</Link>
          </li >
          <li className='bg-blue-300 text-white'>
            <Link to="/calling">Calling interface</Link>
          </li >
          {/* Add more links for additional pages */}
        </ul>
      </div>
      <div className="py-4">
        {/* Add space for future pages */}
      </div>
    </div>
  );
};

export default Navigation;
