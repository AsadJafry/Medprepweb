import React from 'react';
import Navbar2 from './Navbar/Navbar2';

function SignUpPage() {
  return (
    <div>
        
<Navbar2/>
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4 md:px-0">
      {/* Logo */}
    
      {/* Form Container */}
      <div className="w-full max-w-md p-8 bg-gray-100 rounded-md shadow-md mt-8">
        <h2 className="text-3xl font-bold text-center mb-6">Create an Account</h2>
        
        {/* Form */}
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="John Doe"
              />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
              />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="********"
              />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="********"
              />
          </div>

          <button className="w-full bg-black text-white font-bold py-2 rounded-md hover:bg-gray-800">
            Sign Up
          </button>
        </form>

        {/* Sign in Link */}
        <p className="text-gray-600 text-center mt-4">
          Already have an account?{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Sign In
          </a>
        </p>
      </div>
              </div>
    </div>
  );
}

export default SignUpPage;
