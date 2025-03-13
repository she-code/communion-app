import { EventType } from "./type";

const LOCAL_STORAGE_KEY = "event";

// Initialize localStorage with default data if empty
export const initializeEvents = (defaultEvents: EventType[]) => {
  const existingEvents = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!existingEvents) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(defaultEvents));
  }
};

// Save new event while keeping previous ones
export const saveEvent = (newEvent: EventType) => {
  const events = getEvent(); // Get existing events
  const updatedEvents = [...events, newEvent]; // Append new event
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedEvents));
};

// Get events from localStorage
export const getEvent = (): EventType[] => {
  const event = localStorage.getItem(LOCAL_STORAGE_KEY);
  return event ? JSON.parse(event) : [];
};

export const eventsData = [
  {
    title: "Interfaith Peace Conference",
    date: "March 25, 2025",
    location: "Addis Ababa",
    category: "Religious",
    description:
      "A gathering of leaders across faiths promoting unity and dialogue.",
    image:
      "https://images.pexels.com/photos/415571/pexels-photo-415571.jpeg?auto=compress&cs=tinysrgb&w=600", // Random related image
  },
  {
    title: "Community Clean-Up",
    date: "April 5, 2025",
    location: "Megenagna",
    category: "Charity",
    description: "Join us in keeping our community clean and green!",
    image:
      "https://images.pexels.com/photos/9543401/pexels-photo-9543401.jpeg?auto=compress&cs=tinysrgb&w=600", // Random related image
  },
  {
    title: "Youth Empowerment Workshop",
    date: "April 10, 2025",
    location: "Bole",
    category: "Social",
    description: "Helping young leaders develop skills for a brighter future.",
    image:
      "https://images.pexels.com/photos/1231230/pexels-photo-1231230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Random related image
  },
  {
    title: "Community Clean-Up",
    date: "April 5, 2025",
    location: "Megenagna",
    category: "Charity",
    description: "Join us in keeping our community clean and green!",
    image:
      "https://images.pexels.com/photos/9543401/pexels-photo-9543401.jpeg?auto=compress&cs=tinysrgb&w=600", // Random related image
  },
];
