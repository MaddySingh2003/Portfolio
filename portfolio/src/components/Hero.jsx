import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const roles = ["Software Developer", "AI Enthusiast", "Full Stack Dev", "Data Analyst"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timerRef = useRef(null);

  // Typing effect
  useEffect(() => {
    const current = roles[roleIndex];
    if (!deleting) {
      if (text.length < current.length) {
        timerRef.current = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
      } else {
        timerRef.current = setTimeout(() => setDeleting(true), 1500);
      }
    } else {
      if (text.length > 0) {
        timerRef.current = setTimeout(() => setText(text.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }
    return () => clearTimeout(timerRef.current);
  }, [text, deleting, roleIndex]);

  // Scroll handler using ID
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-8 md:px-12 bg-transparent relative overflow-hidden"
    >
      {/* Glow backgrounds */}
      <div className="absolute w-[400px] h-[400px] bg-cyan-400/20 blur-[120px] top-10 left-10 pointer-events-none"></div>
      <div className="absolute w-[300px] h-[300px] bg-blue-500/20 blur-[120px] bottom-10 right-10 pointer-events-none"></div>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full mx-auto">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-cyan-300 italic mb-2">Hi, I am</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wide">MILAN</h1>

          {/* Typing Effect */}
          <h2 className="mt-4 text-xl md:text-2xl text-cyan-400 font-medium">
            I am a <span>{text}<span className="animate-pulse">|</span></span>
          </h2>

          <p className="mt-6 text-gray-300 leading-relaxed max-w-lg">
            I build intelligent systems, scalable APIs, and immersive applications. Passionate about turning complex ideas into real-world solutions.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              Hire Me
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              View Projects
            </button>
          </div>
        </motion.div>

        {/* RIGHT CODE CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center md:justify-end"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-md"
          >
            <div className="bg-black/60 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-5 relative z-10">
              {/* Header */}
              <div className="flex gap-2 mb-3 items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <p className="text-gray-400 text-sm ml-3">milan@portfolio~</p>
              </div>

              {/* Code block */}
              <pre className="text-sm text-cyan-300 font-mono">
{`const profile = {
  name: "Milan",
  role: "AI & Software Developer",
  skills: ["Python", "React", "Node", "Machine Learning"],
  passion: "Building real-world solutions"
};`}
              </pre>
            </div>

            {/* Glow */}
            <div className="absolute inset-0 bg-cyan-400/10 blur-2xl -z-10"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}