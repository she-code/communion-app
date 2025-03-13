import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/images/Logocommunion.0485ada0760e4748313f.png";
import { useMatch } from "raviger";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [eventsMenuOpen, setEventsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false); // Track scroll position

  const matchHome = useMatch("/");
  const matchAbout = useMatch("/about");

  const matchEvents = useMatch("/events");

  const getHomeColor = (href: string) => {
    return matchHome === href ? "text-white" : "text-black";
  };

  // Listen to scroll events and update scroll state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`z-50 fixed w-full transition-all duration-300 ${
        scrolling ? (matchHome ? "bg-black" : "bg-white") : "bg-transparent"
      }`}
    >
      <div className="max-w-[115rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between ">
          {/* Logo */}
          <div className="flex flex-1 sm:items-center">
            <a href="/">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </a>
          </div>
          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:space-x-10 flex-1 justify-center">
            {navigation.map((item) => (
              <div key={item.name} className="relative mt-2">
                <a
                  href={item.href}
                  className={`text-2xl font-medium px-3 py-2 relative group ${getHomeColor(
                    "/"
                  )}`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 right-0 block h-1 bg-[#ffcc00] scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
                </a>
                {(item.href === "/" && matchHome) ||
                (item.href === "/about" && matchAbout) ? (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-1 w-2.5 h-2.5 rounded-full bg-[#ffcc00]" />
                ) : null}
              </div>
            ))}
            {/* Events Menu */}
            <div className="relative">
              <button
                onClick={() => setEventsMenuOpen(!eventsMenuOpen)}
                className={`text-2xl font-medium px-3 py-2 relative cursor-pointer group ${getHomeColor(
                  "/"
                )}  ${matchEvents ? "text-[#ffcc00]" : "text-black"}`}
              >
                Events
                <span className="absolute bottom-0 left-0 right-0 block h-1 bg-[#ffcc00] scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
              </button>
              {matchEvents && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-1 w-2.5 h-2.5 rounded-full bg-[#ffcc00]" />
              )}
              {eventsMenuOpen && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg py-2 rounded-md">
                  <a
                    href="/events"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Upcoming Events{" "}
                  </a>
                  <a
                    href="/add-event"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Add Event
                  </a>
                </div>
              )}
            </div>
          </div>
          {/* Sign In Button */}
          <div className="hidden sm:block flex-1 text-right">
            <a
              href="/"
              className="px-4 py-2 inline-block text-center bg-blue-800 text-white rounded-full text-medium font-semibold shadow-lg shadow-blue-100 hover:bg-blue-700 x-3 border-0 w-32"
            >
              Sign In
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white shadow-md py-3">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-4 py-2 hover:text-blue-700"
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={() => setEventsMenuOpen(!eventsMenuOpen)}
            className="block px-4 py-2 hover:text-blue-700"
          >
            Events
          </button>
          {eventsMenuOpen && (
            <div className="pl-4">
              <a
                href="/events"
                className="block py-2 text-gray-700 hover:text-blue-700"
              >
                Upcoming Events{" "}
              </a>
              <a
                href="/add-event"
                className="block py-2 text-gray-700 hover:text-blue-700"
              >
                Add Event
              </a>
            </div>
          )}
          <a
            href="/signin"
            className="block px-4 py-2 text-blue-800 hover:text-blue-700"
          >
            Sign In
          </a>
        </div>
      )}
    </nav>
  );
}
