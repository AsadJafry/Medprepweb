import React from "react";
import Navbar2 from "./Navbar/Navbar2";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div className="bg-white">
        <Navbar2/>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white bg-gray-800">
        <div className="bg-black bg-opacity-50 p-10 rounded">
          <h1 className="text-4xl md:text-6xl font-bold">Who We Are</h1>
          <p className="text-lg md:text-2xl mt-4">
            Your Trusted Partner in Medical College Applications
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto py-16 px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Our Mission
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          At Med Den, our mission is to simplify the application process for
          aspiring medical professionals. We provide guidance, resources, and
          personalized coaching to help students achieve their dreams of entering
          medical college. With years of experience and a deep understanding of
          the medical school application landscape, we are here to support you at
          every step.
        </p>
        <div className="flex justify-center">
          {/* <img
            src="https://via.placeholder.com/600x400"
            alt="About Us"
            className="rounded-lg shadow-lg"
          /> */}
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-100 py-16 px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Commitment</h3>
            <p className="text-gray-600">
              We are committed to your success, offering tailored support to help
              you achieve your goals.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Expertise</h3>
            <p className="text-gray-600">
              Our team consists of experienced professionals who know the
              intricacies of medical school applications.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Integrity</h3>
            <p className="text-gray-600">
              We uphold the highest standards of honesty and transparency in all
              our services.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="container mx-auto py-16 px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Meet Our Team
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
        <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700">Dr. Ali Emad Jaffery</h3>
            <p className="text-gray-600">Head of Coaching</p>
          </div>
          {/* <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700">Dr. John Doe</h3>
            <p className="text-gray-600">Admissions Expert</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700">Sarah Johnson</h3>
            <p className="text-gray-600">Application Consultant</p>
          </div> */}
        </div>
      </section>

      {/* Footer */}
      <Footer/>
      {/* <footer className="bg-gray-800 py-8 text-center text-white">
        <p className="text-lg">&copy; 2024 Med Den. All Rights Reserved.</p>
      </footer> */}
    </div>
  );
};

export default AboutUs;
