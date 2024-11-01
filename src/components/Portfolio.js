import React from 'react';
import CustomShoeRack from '../assets/CustomShoeRack.jfif';
import shelf2 from '../assets/shelf2.jfif';
import shelf3 from '../assets/shelf3.png';
import shelf4 from '../assets/shelf4'; // Ensure correct file extension
import shelf5 from '../assets/shelf5.png';
import glasscutter from '../assets/glasscutter';
import Uniquewallshelf from '../assets/Uniquewallshelf.jfif';
import Wallshelf from '../assets/Wallshelf.jfif'; 
import Sleekshelf from '../assets/Sleekshelf.jfif';
import Uniqueshelf from '../assets/Uniqueshelf.jfif'; 
import Shoerack from '../assets/Shoerack.jfif';
import Groceryshelf from '../assets/Groceryshelf.jfif';
import palletstool from '../assets/palletstool.jfif';
import ShoerackStand from '../assets/ShoerackStand.jfif';

function Portfolio() {
  return (
    <section className="p-8 bg-gray-100 rounded-lg shadow-md my-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Portfolio</h2>
      <div className="flex overflow-x-auto space-x-6 p-4">
        {/* Portfolio items */}
        <div className="flex-shrink-0 bg-white rounded-lg shadow p-4 w-64">
          <img src={CustomShoeRack} alt="Shoe rack" className="rounded-lg mb-4" />
          <h3 className="text-xl font-bold mb-2 text-center">Custom Shoe Rack</h3>
        </div>
        <div className="flex-shrink-0 bg-white rounded-lg shadow p-4 w-64">
          <img src={shelf2} alt="Shoe rack" className="rounded-lg mb-4" />
          <h3 className="text-xl font-bold mb-2 text-center">Shoe rack</h3>
          <p className="text-gray-600">Simple and yet stylish design.</p>
        </div>
        <div className="flex-shrink-0 bg-white rounded-lg shadow p-4 w-64">
          <img src={shelf3} alt="Shoe cabinet" className="rounded-lg mb-4" />
          <h3 className="text-xl font-bold mb-2 text-center">Shoe cabinet</h3>
          <p className="text-gray-600">Eco-friendly and functional design.</p>
        </div>
        <div className="flex-shrink-0 bg-white rounded-lg shadow p-4 w-64">
          <img src={shelf4} alt="Shoe rack" className="rounded-lg mb-4" />
          <h3 className="text-xl font-bold mb-2 text-center">Elegant stand</h3>
          <p className="text-gray-600">Elegant and sustainable storage solutions.</p>
        </div>
        <div className="flex-shrink-0 bg-white rounded-lg shadow p-4 w-64">
          <img src={shelf5} alt="Shoe rack" className="rounded-lg mb-4" />
          <h3 className="text-xl font-bold mb-2 text-center">Sleek shoe rack</h3>
          <p className="text-gray-600">Self storage shoe shelf.</p>
        </div>
        <div className="flex-shrink-0 bg-white rounded-lg shadow p-4 w-64">
          <img src={Shoerack} alt="Shoe rack" className="rounded-lg mb-4" />
          <h3 className="text-xl font-bold mb-2 text-center">Shoe shelf</h3>
          <p className="text-gray-600">Customized shoe shelf.</p>
        </div>
        <div className="flex-shrink-0 bg-white rounded-lg shadow p-4 w-64">
          <img src={ShoerackStand} alt="Shoe rack" className="rounded-lg mb-4" />
          <h3 className="text-xl font-bold mb-2 text-center">Shoe rack stand</h3>
          <p className="text-gray-600">Custom shoe shelf.</p>
        </div>
        <div className="flex-shrink-0 bg-white rounded-lg shadow p-4 w-64">
          <img src={Groceryshelf} alt="Grocery Shelf" className="rounded-lg mb-4" />
          <h3 className="text-xl font-bold mb-2 text-center">Grocery shelf</h3>
          <p className="text-gray-600">Simple Grocery shelf.</p>
        </div>
        <div className="flex-shrink-0 bg-white rounded-lg shadow p-4 w-64">
          <img src={glasscutter} alt="glass cutter" className="rounded-lg mb-4" />
          <h3 className="text-xl font-bold mb-2 text-center">glass cutter</h3>
          <p className="text-gray-600">Custom glass cutting machine.</p>
        </div>
        <div className="flex-shrink-0 bg-white rounded-lg shadow p-4 w-64">
          <img src={Uniquewallshelf} alt="wall shelf" className="rounded-lg mb-4" />
          <h3 className="text-xl font-bold mb-2 text-center">Wall shelf</h3>
          <p className="text-gray-600 text-center">Unique Shelf.</p>
        </div>
        <div className="flex-shrink-0 bg-white rounded-lg shadow p-4 w-64">
          <img src={Wallshelf} alt="wall shelf" className="rounded-lg mb-4" />
          <h3 className="text-xl font-bold mb-2 text-center">Wall shelf</h3>
          <p className="text-gray-600 text-center">Customized Shelf.</p>
        </div>
        <div className="flex-shrink-0 bg-white rounded-lg shadow p-4 w-64">
          <img src={Sleekshelf} alt="wall shelf" className="rounded-lg mb-4" />
          <h3 className="text-xl font-bold mb-2 text-center">Wall shelf</h3>
          <p className="text-gray-600 text-center">Simple wall Shelf.</p>
        </div>
        <div className="flex-shrink-0 bg-white rounded-lg shadow p-4 w-64">
          <img src={Uniqueshelf} alt="wall shelf" className="rounded-lg mb-4" />
          <h3 className="text-xl font-bold mb-2 text-center">Wall shelf</h3>
          <p className="text-gray-600 text-center">Unique Shelf.</p>
        </div>
        <div className="flex-shrink-0 bg-white rounded-lg shadow p-4 w-64">
          <img src={palletstool} alt="pallet stool" className="rounded-lg mb-4" />
          <h3 className="text-xl font-bold mb-2 text-center">Pallet stool</h3>
          <p className="text-gray-600 text-center">Custom Pallet stool.</p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
