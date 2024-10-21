import React from 'react';

const ConfirmationModal = ({ selectedDate, selectedTime, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg w-96 p-6">
                <h2 className="text-xl font-bold mb-4">Confirmation Details</h2>
                <p className="text-gray-700">Thank you for booking your interview preparation session!</p>
                <ul className="text-gray-700 mt-4">
                    <li><strong>Session Type:</strong> Interview Preparation Session</li>
                    <li><strong>Date:</strong> {selectedDate}</li>
                    <li><strong>Time:</strong> {selectedTime}</li>
                </ul>
                <p className="mt-4">Please proceed to the next step to enter your billing details.</p>
                <div className="flex justify-end space-x-4 mt-4">
                    <button
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                        onClick={onClose}
                    >
                        Close
                    </button>
                    <a
                        href="/billing" // Adjust the path to your billing page
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    >
                        Proceed to Billing
                    </a>
                </div>
            </div>
            
        </div>
    );
};

export default ConfirmationModal;
