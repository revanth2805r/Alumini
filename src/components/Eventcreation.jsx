import React, { useState } from 'react';

const EventPost = ({ onSubmit, createdBy }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [registerLink, setRegisterLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventData = {
      title,
      description,
      date,
      location,
      register_link: registerLink,
      createdBy :"66cefe3fed570d4b4d700506"
    };
    onSubmit(eventData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-xl font-bold mb-4">Create Event</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          className="w-full border border-gray-300 rounded p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="description">Description</label>
        <textarea
          id="description"
          className="w-full border border-gray-300 rounded p-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          className="w-full border border-gray-300 rounded p-2"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          className="w-full border border-gray-300 rounded p-2"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="registerLink">Registration Link</label>
        <input
          type="url"
          id="registerLink"
          className="w-full border border-gray-300 rounded p-2"
          value={registerLink}
          onChange={(e) => setRegisterLink(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white rounded p-2 mt-4 hover:bg-blue-600"
      >
        Create Event
      </button>
    </form>
  );
};

export default EventPost;
