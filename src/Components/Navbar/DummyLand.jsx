import React from 'react';
import { Link } from 'react-router-dom';

function Dummy() {
  return (
    <div className="font-sans">
      {/* Navigation */}
      <header className="bg-white shadow">
        <nav className="container mx-auto flex flex-wrap items-center justify-between py-4">
          <div className="text-xl font-bold">Med Den</div>
          <ul className="hidden md:flex space-x-4">
            <li><a href="#" className="hover:text-gray-600">About</a></li>
            <li><Link to={'/home'}  className="hover:text-gray-600">Learn</Link></li>
            {/* <li><a href="#" className="hover:text-gray-600">TikTok</a></li>
            <li><a href="#" className="hover:text-gray-600">Instagram</a></li>
            <li><a href="#" className="hover:text-gray-600">Twitter</a></li>
            <li><a href="#" className="hover:text-gray-600">Shop</a></li> */}
            <li><a href="#" className="hover:text-gray-600">Members Area</a></li>
          </ul>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-600">Sign in</a>
            <a href="#" className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">Subscribe</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-300 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Your first step to medical college</h1>
        <div className="mt-8 flex justify-center px-4">
          <input
            type="text"
            placeholder="Search posts, tags, authors..."
            className="w-full md:w-1/2 px-4 py-2 border rounded-md"
          />
          <button className="ml-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600">
            Search
          </button>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Featured</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Featured Item */}
            <a href="https://example.com/1" className="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://via.placeholder.com/300"
                alt="Anaesthesia's CRQ Top Tips"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Anaesthesia's CRQ Top Tips</h3>
              </div>
            </a>

            {/* Featured Item */}
            <a href="https://example.com/2" className="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://via.placeholder.com/300"
                alt="How much do I need to know for this?"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">How much do I need to know for this?</h3>
              </div>
            </a>

            {/* Featured Item */}
            <a href="https://example.com/3" className="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://via.placeholder.com/300"
                alt="Critical Incidents"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Critical Incidents</h3>
              </div>
            </a>

            {/* Featured Item */}
            <a href="https://example.com/4" className="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://via.placeholder.com/300"
                alt="All you need to pass the Primary"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">All you need to pass the Primary</h3>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dummy;
