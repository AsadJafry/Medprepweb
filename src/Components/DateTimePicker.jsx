import React, { useState } from 'react';

const DateTimePickerModal = ({ availableDates, availableTimes, onClose, onConfirm }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      onConfirm({ date: selectedDate, time: selectedTime });
    } else {
      alert('Please select both date and time.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg w-96 p-6">
        <h2 className="text-xl font-bold mb-4">Choose a Date & Time</h2>

        {/* Date Selection */}
        <div className="mb-4">
          <label className="block mb-2 text-gray-700 font-medium">Select Date</label>
          <select
            className="w-full p-2 border rounded-md"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          >
            <option value="" disabled>Select Date</option>
            {availableDates.map((date, idx) => (
              <option key={idx} value={date}>{date}</option>
            ))}
          </select>
        </div>

        {/* Time Selection */}
        <div className="mb-4">
          <label className="block mb-2 text-gray-700 font-medium">Select Time</label>
          <select
            className="w-full p-2 border rounded-md"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            <option value="" disabled>Select Time</option>
            {availableTimes.map((time, idx) => (
              <option key={idx} value={time}>{time}</option>
            ))}
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateTimePickerModal;
