import { ArrowUp, MapPin } from "lucide-react";
import { FaStackOverflow, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">

          {/* Brand */}
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Milan
          </h2>

          {/* Tech Links + Location */}
          <div className="flex gap-6 mt-4 md:mt-0 items-center">
            {/* Stack Overflow */}
            <a
              href="https://stackoverflow.com/users/32536879/milan-suryavanshi"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <FaStackOverflow className="text-gray-400 group-hover:text-white text-lg transition" />
              <span className="text-gray-400 group-hover:text-white text-sm">Stack</span>
            </a>

            {/* Twitter/X */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <FaTwitter className="text-gray-400 group-hover:text-white text-lg transition" />
              <span className="text-gray-400 group-hover:text-white text-sm">X</span>
            </a>

            {/* Location */}
            <div className="group flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10">
              <MapPin className="text-gray-400 group-hover:text-white text-lg transition" />
              <span className="text-gray-400 group-hover:text-white text-sm">INDIA</span>
            </div>
          </div>

          {/* Back to Top */}
          <a
            href="#home"
            className="flex items-center gap-2 mt-4 md:mt-0 text-gray-400 hover:text-white transition-all duration-300 group"
          >
            <ArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" size={16} />
            Top
          </a>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 my-6"></div>

        {/* BOTTOM */}
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Milan Suryavanshi — All rights reserved
        </p>

      </div>
    </footer>
  );
}