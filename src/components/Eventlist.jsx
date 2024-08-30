import React, { useState, useEffect } from "react";
import EventCard from "./Eventcard";
import EventDetails from "./Eventdetail"; // This will be your pop-up component for event details

const EventGrid = () => {
  const [events, setEvents] = useState([]); // Initialize state to store event data
  const [selectedEvent, setSelectedEvent] = useState(null); // Initialize state to manage the selected event

  // Fetch event data from the API when the component mounts
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/allevents/66cf2493c6ecbcad1e6d3912"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setEvents(data); // Update state with fetched event data
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchEvents();
  }, []); // Empty dependency array ensures this runs only once on mount

  // Function to set the selected event for details view
  const handleViewDetails = (event) => {
    setSelectedEvent(event);
  };

  // Function to close the pop-up
  const handleCloseDetails = () => {
    setSelectedEvent(null);
  };

  return (
    <div>
      <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            description={event.description}
            date={event.date}
            location={event.location}
            registerLink={event.register_link}
            createdBy={event.createdBy} // Assuming this is a string or a user name
            onViewDetails={() => handleViewDetails(event)}
          />
        ))}
      </div>

      {selectedEvent && (
        <EventDetails event={selectedEvent} onClose={handleCloseDetails} />
      )}
    </div>
  );
};

export default EventGrid;
