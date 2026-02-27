import React from 'react';

const SlotsFullPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h3 className="text-xl font-bold mb-4">Slots Full</h3>
        <p>The slots for this event are full. Please try another event.</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SlotsFullPopup;