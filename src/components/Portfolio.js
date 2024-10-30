import React from 'react';
import shelf1 from '../assets/shelf1.png';
import shelf2 from '../assets/shelf2.jpg';
import shelf3 from '../assets/shelf3.png';
import shelf4 from '../assets/shelf4'; // Ensure correct file extension
import shelf5 from '../assets/shelf5.png';

function Portfolio() {
  return (
    <section className="p-8 bg-gray-100 rounded-lg shadow-md my-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Portfolio</h2>
      <div className="flex overflow-x-auto space-x-6 p-4">
        {/* Portfolio items */}
        <div className="flex-shrink-0 bg-white rounded-lg shadow p-4 w-64">
          <img src={shelf1} alt="Shelf 1" className="rounded-lg mb-4" />
          <h3 className="text-xl font-bold mb-2">Customized stand</h3>
          <p className="text-gray-600">A beautiful shelf made from premium pallets.</p>
        </div>
        <div className="flex-shrink-0 bg-white rounded-lg shadow p-4 w-64">
          <img src={shelf2} alt="Shelf 2" className="rounded-lg mb-4" />
          <h3 className="text-xl font-bold mb-2">Shoe rack</h3>
          <p className="text-gray-600">Simple and yet stylish design.</p>
        </div>
        <div className="flex-shrink-0 bg-white rounded-lg shadow p-4 w-64">
          <img src={shelf3} alt="Shelf 3" className="rounded-lg mb-4" />
          <h3 className="text-xl font-bold mb-2">Shoe cabinet</h3>
          <p className="text-gray-600">Eco-friendly and functional design.</p>
        </div>
        <div className="flex-shrink-0 bg-white rounded-lg shadow p-4 w-64">
          <img src={shelf4} alt="Shelf 4" className="rounded-lg mb-4" />
          <h3 className="text-xl font-bold mb-2">Elegant stand</h3>
          <p className="text-gray-600">Elegant and sustainable storage solutions.</p>
        </div>
        <div className="flex-shrink-0 bg-white rounded-lg shadow p-4 w-64">
          <img src={shelf5} alt="Shelf 5" className="rounded-lg mb-4" />
          <h3 className="text-xl font-bold mb-2">Sleek Shoe rack</h3>
          <p className="text-gray-600">Self storage shoe shelf.</p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
