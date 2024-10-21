import React from 'react';
import Interview from '../assets/Interview.png'
import guide from '../assets/guide.png'
import resource from '../assets/resource.png'
import faq from '../assets/faq.png'
import { Link } from 'react-router-dom';


function Featured(props) {
    return (
        <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Featured</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Featured Item */}
            <a href="https://example.com/1" className="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={resource}
                alt="Anaesthesia's CRQ Top Tips"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Resources</h3>
              </div>
            </a>

            {/* Featured Item */}
            <Link to="/buyguide" className="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={guide}
                alt="How much do I need to know for this?"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">The Complete Guide to Medical School Applications</h3>
              </div>
            </Link>

            {/* Featured Item */}
            <Link to="/InterviewBookingPage" className="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={Interview}
                alt="Critical Incidents"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Nail Your Medical School Interview</h3>
              </div>
            </Link>

            {/* Featured Item */}
            <a href="https://example.com/4" className="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={faq}
                alt="All you need to pass the Primary"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Frequently Asked Questions

</h3>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
}

export default Featured;