import React, { useState } from 'react';
import axios from 'axios';
import Navbar2 from './Navbar/Navbar2';
import { Link } from 'react-router-dom';
import { SERVER_URL } from '../utils/constants';

function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false); // Loader state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage('');
    setSuccessMessage('');

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {
      setLoading(true); 
      const response = await axios.post(SERVER_URL+'auth/register', {
        username: formData.email,
        password: formData.password,
      });

      if (response.status === 201) {
        setSuccessMessage('Registration successful!');
        setErrorMessage(''); 
      } else {
        setErrorMessage('Registration failed.');
      }
    } catch (error) {
      const message = error.response?.data?.message || 'An error occurred. Please try again.';
      setErrorMessage(message);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div>
      <Navbar2 />
      <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4 md:px-0">
        {/* Form Container */}
        <div className="w-full max-w-md p-8 bg-gray-100 rounded-md shadow-md mt-8">
          <h2 className="text-3xl font-bold text-center mb-6">Create an Account</h2>

          {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}
          {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}

          {loading && (
            <div className="flex justify-center items-center mb-4">
              <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-8 w-8"></div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="John Doe"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@example.com"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="********"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="********"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white font-bold py-2 rounded-md hover:bg-gray-800"
              disabled={loading} 
            >
              Sign Up
            </button>
          </form>

          
          <p className="text-gray-600 text-center mt-4">
            Already have an account?{' '}
            <Link to='/login' className="text-blue-500 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
