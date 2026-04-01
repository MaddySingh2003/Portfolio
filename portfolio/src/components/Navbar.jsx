import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 
    bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-lg">

      <div className="flex items-center justify-between px-[6%] md:px-[8%] py-4">

        {/* LOGO */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 flex items-center justify-center rounded-full 
          bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold shadow-md
          group-hover:scale-110 transition">
            M
          </div>

          <span className="text-white font-semibold tracking-wide text-lg">
            Milan
          </span>
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href} className="relative group">
              <a
                href={l.href}
                className="text-gray-300 hover:text-cyan-400 transition duration-300"
              >
                {l.label}
              </a>

              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] 
              bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10"
          >
            <ul className="flex flex-col items-center gap-6 py-6 text-lg">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-gray-300 hover:text-cyan-400 transition"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;  