import React, { useState } from 'react';
import DateTimePickerModal from './DateTimePicker';
import Navbar2 from './Navbar/Navbar2';
import img from '../assets/interview2.jpg'
import { useNavigate, useNavigation } from 'react-router-dom';
import ConfirmationModal from './ConfirmationModal';
import Footer from './Footer';

function InterviewPrepPage() {
    const navigate=useNavigate()
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [conformModal,setConfirmModal]=useState(false)
    // Sample available dates and times
    const availableDates = ['October 25, 2024', 'October 26, 2024', 'October 27, 2024'];
    const availableTimes = ['10:00 AM', '2:00 PM', '4:00 PM'];
  
    const handleBookingClick = () => {
      setModalOpen(true);
    };
  
    const handleModalClose = () => {
      setModalOpen(false);
    };
  
    // const handleConfirm = (selection) => {
    //   console.log('Selected Date & Time:', selection);
    //   // You can send this data to the backend or perform any action here.
    //   setModalOpen(false);
    // };
    const handleConfirm = (selection) => {
        const { date, time } = selection; // Assuming selection has date and time properties
        setSelectedDate(date);
        setSelectedTime(time);
        setModalOpen(false);
        setConfirmModal(true)
        // Navigate to the order confirmation page with selected date and time
        // navigate('/order-confirmation', { state: { selectedDate: date, selectedTime: time } });
    };
    const handleConfirmationClose = () => {
        setConfirmModal(false);
    };
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <Navbar2/> 
      

      {/* Hero Section */}
      <section className="w-full bg-white py-20 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Personalized Interview Prep Sessions</h1>
          <p className="text-lg text-gray-600 mb-8">
            Prepare for your medical school interviews with tailored sessions from experienced professionals. 
            Boost your confidence and ace your interviews!
          </p>
          <p className="text-xl text-gray-900 mb-8 font-semibold">
            Session Cost: <span className="text-blue-500">£25</span> per session.
          </p>
          <button
            onClick={handleBookingClick}
            className="bg-black text-white px-6 py-3 rounded-md font-bold hover:bg-gray-800"
          >
            Book Your Session Now
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-0">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Interview Prep?</h2>
            <p className="text-gray-600 mb-4">
              Our personalized interview preparation sessions are designed to help you succeed by focusing on your strengths 
              and improving areas that need work. Here’s what you can expect:
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>✅ One-on-one coaching with experienced professionals</li>
              <li>✅ Mock interviews tailored to medical school questions</li>
              <li>✅ Detailed feedback and improvement strategies</li>
              <li>✅ Confidence-building techniques for high-stakes interviews</li>
            </ul>
          </div>
          <div>
            <img
              src={img}
              alt="Interview Prep"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-black text-white p-4 rounded-full mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Book a Session</h3>
              <p className="text-gray-600">
                Choose a date and time that works for you, and book your personalized session.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-black text-white p-4 rounded-full mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Get Personalized Coaching</h3>
              <p className="text-gray-600">
                Participate in a tailored interview preparation session with a professional coach.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-black text-white p-4 rounded-full mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Ace Your Interview</h3>
              <p className="text-gray-600">
                Apply the strategies and feedback to excel in your medical school interview.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-800 text-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8">Don't leave your medical school interviews to chance. Book your personalized session today!</p>
          <a href="#" className="bg-white text-black px-6 py-3 rounded-md font-bold hover:bg-gray-300">
            Book Now
          </a>
        </div>

      </section>
      {isModalOpen && (
        <DateTimePickerModal
          availableDates={availableDates}
          availableTimes={availableTimes}
          onClose={handleModalClose}
          onConfirm={handleConfirm}
        />
        
      )}
       {conformModal && (
                <ConfirmationModal
                    selectedDate={selectedDate}
                    selectedTime={selectedTime}
                    onClose={handleConfirmationClose}
                />
            )}
    <Footer/>
    </div>
  );
}

export default InterviewPrepPage;
