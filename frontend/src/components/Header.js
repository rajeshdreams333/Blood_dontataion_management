import React from "react";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <a href="/">
      <img
        className="h-12 rounded-full"
        src=".\assets\BDMS_logo.jpg"
        alt="Logo"
      />
      <ul className="flex space-x-4 justify-end font-bold px-4">
        <li><Link to="/" className="hover:text-lg">Home</Link></li>
        <li><Link to="/contactus" className="hover:text-lg">ContactUs</Link></li>
        <li><Link to="/about" className="hover:text-lg">About</Link></li>
        <li><Link to="/admin" className="hover:text-lg">Admin</Link></li>
        </ul>
    </a>
  );
};
function Header() {
  return (
    <>
    <header className="bg-red-600 p-4 text-white">
    <Logo/>
    </header>
    </>
  );
}

export default Header;
