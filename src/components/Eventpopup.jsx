import React, { useState, useRef, useEffect } from 'react';
import EventPost from './Eventcreation'; // Adjust the path as necessary

const EventPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  const handleClickOutside = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      closePopup();
    }
  };

  const handleEventSubmit = async (eventData) => {
    try {
      const response = await fetch('http://localhost:3000/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });

      if (!response.ok) {
        throw new Error('Failed to create event');
      }

      const data = await response.json();
      console.log('Event Created:', data);
      closePopup(); // Close popup after successful submission
    } catch (error) {
      console.error('Error:', error);
      // Optionally, you can handle the error (e.g., show a message to the user)
    }
  };

  useEffect(() => {
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
            className="bg-white rounded-lg max-w-lg w-full relative mt-6"
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <EventPost onSubmit={handleEventSubmit} />
          </div>
        </div>
      )}
    </div>
  );
};

export default EventPopup;
