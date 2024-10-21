import React from 'react';
import Navbar2 from './Navbar/Navbar2';
import s from '../assets/guide.png'
import Footer from './Footer';
import { Link } from 'react-router-dom';
function MedicalGuidePage() {
  return (
    <div className="  bg-gray-100 text-gray-900">
        <Navbar2/>
      {/* Hero Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 md:flex justify-between items-center">
          {/* Text Section */}
          <div className="md:w-1/2 text-left">
            <h1 className="text-5xl font-bold mb-6">Medical School Application Guide</h1>
            <p className="text-lg text-gray-600 mb-4">
              Get your hands on our comprehensive guide that will walk you through the entire medical school application process.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Step-by-step application guidance</li>
              <li>Personal statement advice</li>
              <li>Interview preparation tips</li>
            </ul>
            <p className="text-2xl font-semibold text-gray-900">
              Guide Price: <span className="text-blue-600">$49.99</span>
            </p>
            <button
              onClick={() => alert('Redirect to Guide Purchase')}
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-700"
            >
              Get the Guide Now
            </button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img
              src={s} // Replace with the actual guide cover image
              alt="Medical Guide"
              className="max-w-full rounded-md shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">What's Inside the Guide?</h2>
          <div className="md:grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Step-by-Step Application Process</h3>
              <p className="text-gray-600">
                Learn exactly how to prepare, organize, and submit your medical school applications successfully.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Personal Statement Help</h3>
              <p className="text-gray-600">
                Create a standout personal statement that highlights your strengths and motivations for medical school.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Interview Preparation</h3>
              <p className="text-gray-600">
                Expert tips and strategies to help you ace your medical school interviews with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">What Our Readers Say</h2>
          <div className="md:grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
              <p className="italic text-gray-600">
                "This guide is a lifesaver! I felt completely prepared for my medical school application process."
              </p>
              <p className="mt-4 font-semibold">- John D.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
              <p className="italic text-gray-600">
                "The interview tips helped me gain confidence and secure my spot at my dream school."
              </p>
              <p className="mt-4 font-semibold">- Sarah K.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
              <p className="italic text-gray-600">
                "Highly recommended! Every step is clearly explained, making it easy to follow."
              </p>
              <p className="mt-4 font-semibold">- Emily P.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-10 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Don't Miss Out!</h2>
          <p className="text-lg text-gray-700 mb-6">
            Get the guidance you need to succeed in your medical school application process. Download the guide today.
          </p>
          {/* <button
            onClick={() => 
                alert('Redirect to Guide Purchase')}
            className="bg-blue-600 text-white px-8 py-3 rounded-md font-bold hover:bg-blue-700"
          >

            Get the Guide Now for £49.99
          </button> */}
          <Link to='/app' className="bg-blue-600 text-white px-8 py-3 rounded-md font-bold hover:bg-blue-700"
          >
          Get the Guide Now for £49.99
          
          </Link>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default MedicalGuidePage;
