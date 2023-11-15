// Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-red-500 text-black p-4 font-serif text-xl h-16">
      <div className="container mx-auto flex justify-between items-center"> 
        <Link to="/">
          <img src=".\assets\BDMS_logo.png" alt="Logo" className="h-10 w-42" />
        </Link>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-2xl">
            Home
          </Link>
          <Link to="/about" className="hover:text-2xl">
            About
          </Link>
          <Link to="/contactus" className="hover:text-2xl">
            Contact Us
          </Link>
          <Link to="/admin" className="hover:text-2xl">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
