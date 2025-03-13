import React, { useState } from "react";
import { navigate } from "raviger";
import { saveEvent } from "../../utils/storageUtil";
import { EventType } from "../../utils/type";
import { createSuccess, errorCreating } from "../common/notification";
import Label from "../common/Label";

export default function AddEvent() {
  const categories = ["All", "Religious", "Social", "Charity"];

  const [newEvent, setNewEvent] = useState<EventType>({
    title: "",
    date: "",
    category: "Religious",
    location: "",
    description: "",
    image: "",
  });
  const handleAddEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !newEvent.title ||
      !newEvent.date ||
      !newEvent.location ||
      !newEvent.description
    ) {
      errorCreating();
      return;
    }
    saveEvent(newEvent);
    createSuccess();

    setNewEvent({
      title: "",
      date: "",
      category: "Religious",
      location: "",
      description: "",
      image: "",
    });

    navigate("/events");
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-xl">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
          Add a New Event
        </h2>
        <form onSubmit={handleAddEvent} className="space-y-4">
          <Label>Event Title* </Label>{" "}
          <input
            type="text"
            placeholder="Event Title"
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
            className="w-full border mt-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <Label>Event Date* </Label>{" "}
          <input
            type="date"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            className="w-full border mt-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <Label>Image URL</Label>{" "}
          <input
            type="text"
            placeholder="https://example.com/image.jpg"
            value={newEvent.image}
            onChange={(e) =>
              setNewEvent({ ...newEvent, image: e.target.value })
            }
            className="w-full border mt-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <Label>Event Location*</Label>{" "}
          <input
            type="text"
            placeholder="Location"
            value={newEvent.location}
            onChange={(e) =>
              setNewEvent({ ...newEvent, location: e.target.value })
            }
            className="w-full border mt-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <Label>Event Type*</Label>{" "}
          <select
            value={newEvent.category}
            onChange={(e) =>
              setNewEvent({ ...newEvent, category: e.target.value })
            }
            className="w-full border mt-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            {categories
              .filter((cat) => cat !== "All")
              .map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
          </select>
          <Label>Description*</Label>{" "}
          <textarea
            placeholder="Description"
            value={newEvent.description}
            onChange={(e) =>
              setNewEvent({ ...newEvent, description: e.target.value })
            }
            className="w-full  mt-2 border border-gray-300 rounded-lg p-3 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition"
          >
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
}
