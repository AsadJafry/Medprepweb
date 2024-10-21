import React from 'react';
import { useLocation } from 'react-router-dom';

function OrderConfirmationPage() {
    const location = useLocation();
    const { selectedDate, selectedTime } = location.state || {};

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
                <h1 className="text-2xl font-bold mb-6">Order Confirmation</h1>
                <p className="mb-4">Thank you for booking your interview preparation session!</p>
                <h2 className="text-xl font-semibold mb-4">Session Details</h2>
                <ul className="text-gray-700">
                    <li><strong>Session Type:</strong> Interview Preparation Session</li>
                    <li><strong>Date:</strong> {selectedDate}</li>
                    <li><strong>Time:</strong> {selectedTime}</li>
                </ul>
                <p className="mt-4">Please proceed to the next step to enter your billing details.</p>
                <a href="/billing" className="bg-black text-white px-6 py-3 rounded-md font-bold hover:bg-gray-800 mt-4 block text-center">
                    Proceed to Billing
                </a>
            </div>
        </div>
    );
}

export default OrderConfirmationPage;
