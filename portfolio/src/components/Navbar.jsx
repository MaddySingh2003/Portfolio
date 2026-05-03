import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-ai-card/80 backdrop-blur-xl border-b border-ai-neon/20 shadow-[0_0_20px_rgba(0,240,255,0.1)]" : "bg-transparent py-2"
    }`}>

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">

        {/* LOGO */}
        <a href="#home" className="flex items-center gap-2 group">
          <Terminal className="text-ai-neon w-6 h-6 group-hover:text-ai-purple transition-colors duration-300" />
          <span className="text-gray-300 font-mono font-semibold tracking-wide text-lg group-hover:text-white transition-colors duration-300">
            ~/milan<span className="text-ai-neon animate-pulse">_</span>
          </span>
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-sm font-mono">
          {links.map((l) => (
            <li key={l.href} className="relative group">
              <a
                href={l.href}
                className="text-gray-400 hover:text-ai-neon transition duration-300"
              >
                <span className="text-ai-purple/70 mr-1">&lt;</span>
                {l.label}
                <span className="text-ai-purple/70 ml-1">/&gt;</span>
              </a>
              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-ai-neon transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#00F0FF]"></span>
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-gray-300 hover:text-ai-neon transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-ai-card/95 backdrop-blur-xl border-t border-ai-neon/20 overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-6 text-lg font-mono">
              {links.map((l) => (
                <li key={l.href} className="w-full text-center">
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block text-gray-400 hover:text-ai-neon hover:bg-ai-neon/10 py-2 transition"
                  >
                    <span className="text-ai-purple mr-2">&lt;</span>
                    {l.label}
                    <span className="text-ai-purple ml-2">/&gt;</span>
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