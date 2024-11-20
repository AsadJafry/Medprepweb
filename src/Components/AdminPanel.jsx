
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'; 
import { v4 as uuidv4 } from 'uuid'; 
import { localStorageKeys, SERVER_URL } from "../utils/constants";

const AdminPanel = () => {
  const [generatedCodes, setGeneratedCodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleGenerateCode = async () => {
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
        SERVER_URL+'codes/generate', 
        {}, 
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      const newCode = response.data.code; 
      setGeneratedCodes([...generatedCodes, newCode]);
      setSuccess('Code generated successfully!');
    } catch (error) {
      console.error('Error generating code:', error);
      setError('Failed to generate code. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      <aside className="w-64 bg-gray-900 text-white h-screen">
        <div className="p-4 text-center font-bold text-2xl">Admin Panel</div>
        <nav>
          <ul className="mt-4">
            <li className="p-3 hover:bg-gray-700">
              <Link to="/admin/dashboard">Dashboard</Link>
            </li>
            <li className="p-3 hover:bg-gray-700">
              <Link to="/">Home</Link>

            </li>
            <li className="p-3 hover:bg-gray-700">
              <Link to="/app">App</Link>
            </li>
          </ul>
        </nav>
      </aside>

      
      <div className="flex-1 p-6">
        <header className="bg-gray-800 text-white p-4 rounded-md">
          <h1 className="text-xl">Welcome, Admin</h1>
        </header>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Website Overview</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-lg font-semibold">Total Users</h3>
              <p className="text-2xl mt-2 font-bold">1234</p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-lg font-semibold">Posts</h3>
              <p className="text-2xl mt-2 font-bold">56</p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-lg font-semibold">Orders</h3>
              <p className="text-2xl mt-2 font-bold">89</p>
            </div>
          </div>

        
          <div className="bg-white mt-6 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold">Recent Activity</h3>
            <ul className="list-disc list-inside mt-4">
              <li>User <strong>JohnDoe</strong> updated profile</li>
              <li>New order received: Order #254</li>
              <li>Post titled "Medical College Tips" was published</li>
            </ul>
          </div>

         
          <div className="bg-white mt-6 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold">Code Generator</h3>

       
            {loading && <p className="text-blue-500 mb-4">Generating code...</p>}

     
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}

            <button
              onClick={handleGenerateCode}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              disabled={loading}
            >
              {loading ? 'Generating...' : 'Generate Code'}
            </button>

           
            {generatedCodes.length > 0 && (
              <div className="mt-4">
                <h4 className="font-semibold">Generated Codes:</h4>
                <ul className="list-disc list-inside mt-2">
                  {generatedCodes.map((code, index) => (
                    <li key={index} className="text-gray-700">
                      {code}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminPanel;
