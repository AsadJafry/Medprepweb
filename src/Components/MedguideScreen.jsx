import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar2 from './Navbar/Navbar2';
import Footer from './Footer';
import axios from 'axios'; // Axios for API requests
import s from '../assets/guide.png';
import { localStorageKeys, SERVER_URL } from '../utils/constants';

function MedicalGuidePage() {
  const [showModal, setShowModal] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Check if access token is present in localStorage and validate access
  const handleEarlyAccessClick = async () => {
    const token = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);
    if (!token) {
      // If no token, redirect to login page
      navigate('/login');
      return;
    }

    try {
      // Call API to check guide access
      const response = await axios.get(SERVER_URL+'users/check-guide-access', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.data) {
        // Redirect to the guide if access is granted
        navigate('/app');
      } else {
        // If access is denied, open the modal to redeem the code
        setShowModal(true);
      }
    } catch (error) {
      console.error('Error checking guide access:', error);
      setError('Failed to check access. Please try again.');
    }
  };

  // Redeem code function
  const handleRedeemCode = async () => {
    setLoading(true);
    setError('');
    setSuccess('');
    const token = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

    if (!token) {
      setError('Authorization token is missing. Please log in again.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        SERVER_URL+'codes/redeem',
        { code }, // The code inputted by the user
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      
      if (response?.data?.success){

        setSuccess('Code redeemed successfully!');
      }
      else 
      setError(response?.data?.message)
    } catch (error) {
      console.error('Error redeeming code:', error);
      setError('Failed to redeem the code. Please try again.');
    } finally {
      setLoading(false);
      setCode('')
    }
  };

  return (
    <div className="bg-gray-100 text-gray-900">
      <Navbar2 />
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
              Guide Price: <span className="text-blue-600">£5 </span>
            </p>
            <button
              onClick={() => alert('Redirect to Guide Purchase')}
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-700"
            >
              Get the Guide Now
            </button>

            {/* Early Access Button */}
            <button
              onClick={handleEarlyAccessClick}
              className="mt-6 ml-4 bg-green-600 text-white px-6 py-3 rounded-md font-bold hover:bg-green-700"
            >
              Early Access
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
          <a href='#' className="bg-blue-600 text-white px-8 py-3 rounded-md font-bold hover:bg-blue-700"
          >
          Get the Guide Now for £5 
          
          </a>
        </div>
      </section>
      {/* Modal for Redeeming Code */}
      
{showModal && (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4 sm:mx-auto"> {/* Adjusted width */}
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Redeem Your Code</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}

      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter your code"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleRedeemCode}
          className="bg-blue-600 text-white px-6 py-2 rounded font-bold hover:bg-blue-700 w-full sm:w-auto"
          disabled={loading}
        >
          {loading ? 'Redeeming...' : 'Redeem Code'}
        </button>

        <button
          onClick={() => setShowModal(false)}
          className="bg-gray-600 text-white px-6 py-2 rounded font-bold hover:bg-gray-700 w-full sm:w-auto"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MedicalGuidePage;
