import React, { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { localStorageKeys } from "../../utils/constants";

const Navbar2 = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [showMenu, setShowMenu] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showSignOutModal, setShowSignOutModal] = useState(false); // Sign-out modal state
  const element = document.documentElement;
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    setAccessToken(localStorage.getItem(localStorageKeys.ACCESS_TOKEN));
    let user = JSON.parse(localStorage.getItem(localStorageKeys.USER));
    setIsAdmin(user?.userAdmin);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    localStorage.removeItem(localStorageKeys.USER);
    setAccessToken(null);
    setIsAdmin(false);
    setShowSignOutModal(false);
    navigate("/"); 
  };

  return (
    <header className="w-full flex justify-between items-center py-4 bg-gray-100">
      <div className="text-xl font-bold pl-4">AJ MEDDY</div>
    
      <nav className="hidden md:flex space-x-8 text-lg">
        <Link to="/home" className="hover:text-gray-700 dark:hover:text-gray-400">
          Home
        </Link>
        <Link to="/about" className="hover:text-gray-700 dark:hover:text-gray-400">
          About
        </Link>
        <Link to="/contactus" className="hover:text-gray-700 dark:hover:text-gray-400">
          Contact
        </Link>
        {isAdmin && (
          <Link to="/adminpannel" className="hover:text-gray-700 dark:hover:text-gray-400">
            Admin
          </Link>
        )}
      </nav>

     
      {!accessToken ? (
        <Link
          to="/login"
          className="hidden md:block bg-black text-white px-4 py-2 pr-8 rounded hover:bg-gray-800"
        >
          Sign In
        </Link>
      ) : (
        <button
          onClick={() => setShowSignOutModal(true)} // Open sign-out modal
          className="hidden md:block bg-black text-white px-4 py-2 pr-8 rounded hover:bg-gray-800"
        >
          Sign Out
        </button>
      )}

      {/* Mobile view: Hamburger Menu */}
      <div className="flex items-center gap-4 md:hidden pr-4">
        {showMenu ? (
          <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
        ) : (
          <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
        )}
      </div>

      {/* Mobile Sliding Menu */}
      {showMenu && (
        <div className="fixed inset-0 z-50 flex flex-col w-64 h-full bg-white">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-lg font-bold">Med Den</h2>
            <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
          </div>

          <nav className="flex-grow">
            <ul className="space-y-4 p-4">
              <li>
                <Link to="/home" className="block text-lg hover:text-gray-700 dark:hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="block text-lg hover:text-gray-700 dark:hover:text-gray-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contactus" className="block text-lg hover:text-gray-700 dark:hover:text-gray-400">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        {!accessToken ? (

          <div className="p-4">
            <Link to="/login" className="block bg-black text-white text-center py-2 rounded hover:bg-gray-800">
              Sign In
            </Link>
          </div>
          
        ):(
          <div className="p-4">
            <button
          onClick={() => setShowSignOutModal(true)} // Open sign-out modal
          className="block bg-black text-white text-center py-2 rounded hover:bg-gray-800"
        >
          Sign Out
        </button>
          </div>
        )}
        </div>
      )}

    
      {showSignOutModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Confirm Sign Out</h2>
            <p className="mb-6">Are you sure you want to sign out?</p>

            <div className="flex justify-end">
              <button
                onClick={handleSignOut}
                className="bg-red-600 text-white px-4 py-2 rounded mr-4 hover:bg-red-700"
              >
                Yes, Sign Out
              </button>
              <button
                onClick={() => setShowSignOutModal(false)}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar2;
