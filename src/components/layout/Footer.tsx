export default function Footer() {
  return (
    <footer className="bg-black text-white py-7 mt-8 text-center">
      <div className="max-w-[115rem] mx-auto px-4 sm:px-6 lg:px-8 mb-1.5">
        <div className="flex justify-between items-center ext-center">
          <div className="text-sm">
            <p>
              &copy; {new Date().getFullYear()} Communion. All rights reserved.
            </p>
          </div>
          <div className="space-x-6 text-sm">
            <a href="/privacy-policy" className="hover:text-[#ffcc00]">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="hover:text-[#ffcc00]">
              Terms of Service
            </a>
            <a href="/contact" className="hover:text-[#ffcc00]">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
