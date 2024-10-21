import React from 'react';

function HeroSection() {
  return (
    <section className="bg-lime-50 h-3/6 flex flex-col justify-center items-start px-8 md:px-16 lg:px-32 py-5">
     
      <div className="mt-8 lg:mt-16 text-left">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Achieve Medical <br /> School Success
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-700">
          Guiding you through every step of your journey to medical school
        </p>
        <a href="#" className="text-lg font-semibold border border-black px-6 py-3 rounded-md hover:bg-gray-100">
          Book a session now
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
