import React from 'react';

const JobCard = ({ jobTitle, company, email, location, postedBy, onViewDetails }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h4 className="text-xl font-semibold text-gray-900 mb-2">{jobTitle}</h4>
      <p className="text-sm text-gray-700 mb-2">{company}</p>
      <p className="text-sm text-gray-700 mb-2">{email}</p>
      <p className="text-sm text-gray-700 mb-2">{location}</p>
      <p className="text-sm text-gray-700 mb-2"><strong>Posted by:</strong> {postedBy}</p>
      <button
        onClick={onViewDetails}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        View Details
      </button>
    </div>
  );
};

export default JobCard;
