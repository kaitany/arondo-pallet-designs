import React from 'react';
import artisanImage from '../assets/artisan.jfif'; 

function MeetTheArtisan() {
  return (
    <section className="bg-gray-100 p-8 rounded-lg shadow-md my-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Meet the Artisan</h2>
      <div className="flex items-center space-x-6">
        <img src={artisanImage} alt="Artisan" className="rounded-lg w-48 h-48 shadow-lg" />
        <div>
          <h3 className="text-xl font-bold text-gray-800">Leslie Arondo</h3>
          <p className="text-gray-600 mt-2">
            With a passion for sustainable design, Leslie Arondo has spent years perfecting the art of creating
            eco-friendly furniture. Every piece is crafted with care and creativity, combining style with
            environmentally conscious practices.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MeetTheArtisan;
