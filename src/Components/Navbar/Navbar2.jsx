import React, { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [showMenu, setShowMenu] = useState(false);

  const element = document.documentElement;

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

  return (
      
      // <header className="w-full flex justify-between items-center py-4 bg-white dark:bg-gray-900">with dmode
    <header className="w-full flex justify-between items-center py-4 bg-white">
      <div className="text-xl font-bold pl-4">Med Den</div> {/* Added padding-left */}

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-8 text-lg">
        {/* <a href="#" className="hover:text-gray-700 dark:hover:text-gray-400">Learn</a> */}
        <Link to="/home" className="hover:text-gray-700 dark:hover:text-gray-400">Home</Link>
        <Link to="/about" className="hover:text-gray-700 dark:hover:text-gray-400">About</Link>
      
        <Link to="/contactus" className="hover:text-gray-700 dark:hover:text-gray-400">Contact</Link>
      </nav>

      {/* Sign In button */}
      <Link
        to="/signup"
        className="hidden md:block bg-black text-white px-4 py-2 pr-8 rounded hover:bg-gray-800"
      >
        Sign In
      </Link>

      {/* Mobile view: Hamburger Menu */}
      <div className="flex items-center gap-4 md:hidden pr-4">
        {/* {theme === "dark" ? (
          <BiSolidSun onClick={() => setTheme("light")} className="text-2xl cursor-pointer" />
        ) : (
          <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl cursor-pointer" />
        )} */}

        {showMenu ? (
          <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
        ) : (
          <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
        )}
      </div>

      {/* Mobile Sliding Menu */}
      {showMenu && (
        
        // <div className="fixed inset-0 z-50 flex flex-col w-64 h-full bg-white dark:bg-gray-800 shadow-lg">
        <div className="fixed inset-0 z-50 flex flex-col w-64 h-full bg-white">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-lg font-bold">Med Den</h2>
            <HiMenuAlt1
              onClick={toggleMenu}
              className="cursor-pointer transition-all"
              size={30}
            />
          </div>

          <nav className="flex-grow">
            <ul className="space-y-4 p-4">
              {/* <li>
                <a href="#" className="block text-lg hover:text-gray-700 dark:hover:text-gray-400">
                  Learn
                </a>
              </li> */}
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

          <div className="p-4">
            <Link
              to="/signup"
              className="block bg-black text-white text-center py-2 rounded hover:bg-gray-800"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar2;
