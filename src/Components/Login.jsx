import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navbar2 from './Navbar/Navbar2';
import { localStorageKeys, SERVER_URL } from '../utils/constants';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  useEffect(()=>{
    let token= localStorage.getItem(localStorageKeys.ACCESS_TOKEN)
    if (token)
        navigate('/')
},[])
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Username and Password are required.');
      return;
    }

    setLoading(true);

    
    try {
      const response = await axios.post(SERVER_URL+'auth/login', {
        username: username,
        password: password,
      });

      localStorage.setItem(localStorageKeys.ACCESS_TOKEN, response.data.access_token);
      
      localStorage.setItem(localStorageKeys.USER, JSON.stringify(response.data));

      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid username or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar2 />
      <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4 md:px-0">
        <div className="w-full max-w-md p-8 bg-gray-100 rounded-md shadow-md mt-8">
          <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

       
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

         
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white font-bold py-2 rounded-md hover:bg-gray-800"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          {/* Sign up Link */}
          <p className="text-gray-600 text-center mt-4">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
