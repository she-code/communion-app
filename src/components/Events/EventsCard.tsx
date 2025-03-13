import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import "./st.css";

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  location: string;
  category: string;
  image: string;
}

export default function EventsCard(eventsCardProps: EventCardProps) {
  const { title, description, image, date, location, category } =
    eventsCardProps;

  return (
    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-800 shadow-lg shadow-gray-300 hover:shadow-2xl transition-shadow duration-300 group">
      {/* Image Section */}
      <div className="relative mx-4 -mt-6 h-48 overflow-hidden rounded-xl bg-blue-gray-500 shadow-lg">
        <img
          src={image}
          className="absolute inset-0 h-full w-full object-cover"
          alt="Event Image"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h5 className="mb-4 text-2xl font-semibold text-gray-900">{title}</h5>
        <p className="text-base font-medium text-gray-600">{description}</p>

        {/* Category Display */}
        <div
          className={`mt-2 p-3 ${category} === "Religious" ? "bg-blue-200" : ${category} == "Social" ? "bg-green-100" : ${category} == "Charity" ? "bg-yellow-100" : ${category} == "entertainment" ? "bg-red-100" : ${category} == "sports" ? "bg-indigo-100" : ${category} == "other" ? "bg-gray-100" : "bg-blue-100"}`}
        >
          <span className="text-lg font-semibold text-blue-600">
            {category}
          </span>
        </div>

        {/* Event Info */}
        <div className="mt-4 flex flex-col gap-2 text-base text-gray-700">
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-blue-500" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-500" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="p-6 pt-0 flex justify-center">
        <button
          type="button"
          className="rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 py-3 px-6 text-white text-sm font-bold uppercase shadow-md hover:shadow-lg transition-all"
        >
          Read More
        </button>
      </div>
    </div>
  );
}
