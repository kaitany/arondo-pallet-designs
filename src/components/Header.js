import React from 'react';
import logo from '../assets/logo.jfif'; // Import your logo image

function Header() {
  return (    <header className="bg-yellow-900 text-white p-6 shadow-lg flex flex-col items-center"> {/* Using a gray background */}
      <img src={logo} alt="Logo" className="max-w-sm h-50" /> 
      <h1 className="text-4xl font-bold text-center tracking-wider drop-shadow-md">LES UNIQUE PALLETS</h1>
      <p className="font-bold text-center text-lg mt-2">Eco-friendly shelves that add elegance to your space</p>
    </header>
  );
}

export default Header;
