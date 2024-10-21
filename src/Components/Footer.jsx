import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4  bottom-0 w-full">
      <div className="text-center">
        <p className="text-sm">
          Med Den X &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
