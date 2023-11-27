// Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-red-800 text-white font-serif text-xl h-20 shadow-2xl">
      <div className="flex justify-between items-center"> 
        <Link to="/">
          <img src=".\assets\BDMS_logo11.png" alt="Logo" className="h-20 w-36"/>
        </Link>
        <div>
        <h1 className='text-amber-300 text-2xl font-bold'>Blood Donatation Management System</h1>
        </div>
        <div>
        <nav className="space-x-4 flex flex-wrap pr-10">
          <div>
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          </div>
          <div>
          <Link to="/about" className="hover:text-black">
            About
          </Link>
          </div>
          <div>
          <Link to="/contactus" className="hover:text-black">
            Contact Us
          </Link>
          </div>
          <div>
          <Link to="/admin" className="hover:text-black">
            Login
          </Link>
          </div>
        </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
