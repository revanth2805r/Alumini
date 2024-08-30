import React from "react";

const EventDetails = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">{event.title}</h2>
        <p className="mb-2">
          <strong>Description:</strong> {event.description}
        </p>
        <p className="mb-2">
          <strong>Date:</strong> {new Date(event.date).toLocaleString()}
        </p>
        <p className="mb-2">
          <strong>Location:</strong> {event.location}
        </p>
        <p className="mb-2">
          <strong>Created by:</strong> {event.createdBy}
        </p>
        <a
          href={event.register_link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default EventDetails;
