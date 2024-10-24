import React from 'react';

function FormModal({onclickClose}) {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mx-4 md:mx-8 lg:mx-16">
          <h2 className="text-2xl font-bold mb-4">Book Your Session</h2>
          <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfR2yKdHlPBBr19t8fLvpZD2gZxtndk8dHzocdk1pP3Z60p8g/viewform?embedded=true" // Replace {YOUR_FORM_ID} with your actual form ID
          width="100%"
            height="500"
            className="border-0"
            allowFullScreen
            title="Google Form"
          ></iframe>

          <div className="mt-4 flex justify-end">
            <button
              onClick={onclickClose}
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
}

export default FormModal;