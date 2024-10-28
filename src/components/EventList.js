import React, { useState } from "react";
import { events } from "../mockData";
import EventModal from "./EventModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./EventList.css";

const EventList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="event-list-container">
      <div className="sidebar">
        <ul>
          <li>Popularity</li>
          <li>Trending /Top Suggestions</li>
          <li>Event Type</li>
          <li>Date Filters</li>
          <li>Location Filter</li>
          <li>Trending</li>
        </ul>
      </div>
      <div className="events-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>

        <div className="events-grid">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="event-card"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="event-image-container">
                <img
                  alt="bg-img"
                  className="event-image"
                  src={event.image}
                />
              </div>
              <div className="event-details">
                <h3>{event.name}</h3>
                <p className="event-location">{event.location}</p>
                <p className="event-date">{event.date}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default EventList;
