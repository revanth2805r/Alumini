import React from "react";

const EventCard = ({
  title,
  description,
  date,
  location,
  registerLink,
  createdBy,
  onViewDetails,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h4 className="text-xl font-semibold text-gray-900 mb-2">{title}</h4>
      <p className="text-sm text-gray-700 mb-2">{description}</p>
      <p className="text-sm text-gray-700 mb-2">
        {new Date(date).toLocaleDateString()}
      </p>
      <p className="text-sm text-gray-700 mb-2">{location}</p>
      <p className="text-sm text-gray-700 mb-2">
        <strong>Created by:</strong> {createdBy}
      </p>
      <a
        href={registerLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Register
      </a>
      <button
        onClick={onViewDetails}
        className="mt-4 ml-2 bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400"
      >
        View Details
      </button>
    </div>
  );
};

export default EventCard;
