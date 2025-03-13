import { useEffect, useState } from "react";
import EventsCard from "../../components/Events/EventsCard";
import { getEvent, initializeEvents } from "../../utils/storageUtil";
import { eventsData } from "../../utils/storageUtil";
import { EventType } from "../../utils/type";

const categories = ["All", "Religious", "Social", "Charity"];

const EventListing = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    // Initialize localStorage if empty
    initializeEvents(eventsData);
    // Load events from localStorage
    setEvents(getEvent());
  }, []);

  // Filter Events
  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  return (
    <div className="max-w-[115rem] p-6 mx-auto">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-900 mt-32">
        Upcoming Events
      </h1>

      {/* Category Filters */}
      <div className="flex justify-center space-x-4 mb-24">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-full border transition ${
              selectedCategory === cat
                ? "bg-blue-800 text-white"
                : "border-gray-400 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Event Cards */}
      <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 lg:grid-cols-4 sm:justify-center sm:items-center">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <div className="sm:my-2.5 mb-4 md:mr-2.5" key={index}>
              <EventsCard {...event} />
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-3">
            No events found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default EventListing;
