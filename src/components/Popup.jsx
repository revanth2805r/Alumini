import React, { useState, useRef } from 'react';
import JobPost from './JobPost'; // Adjust path as needed

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  // Close the popup if clicking outside of it
  const handleClickOutside = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      closePopup();
    }
  };

  // Add event listener for clicks outside the popup
  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div>
      <button
        onClick={openPopup}
        className="fixed bottom-8 right-8 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        +
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div
            ref={popupRef}
            className="bg-white  rounded-lg max-w-lg w-full relative mt-6"
          >
            <button 
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <JobPost />
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
