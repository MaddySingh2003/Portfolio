import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const roles = [
  "Software Developer",
  "AI Enthusiast",
  "Full Stack Dev",
  "Data Analyst",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const current = roles[roleIndex];

    if (!deleting) {
      if (text.length < current.length) {
        timerRef.current = setTimeout(() => {
          setText(current.slice(0, text.length + 1));
        }, 70);
      } else {
        timerRef.current = setTimeout(() => setDeleting(true), 1200);
      }
    } else {
      if (text.length > 0) {
        timerRef.current = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 40);
      } else {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }

    return () => clearTimeout(timerRef.current);
  }, [text, deleting, roleIndex]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4 sm:px-6 md:px-12 relative overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute w-[250px] h-[250px] bg-cyan-400/20 blur-[100px] top-5 left-5"></div>
      <div className="absolute w-[200px] h-[200px] bg-blue-500/20 blur-[100px] bottom-5 right-5"></div>

      <div className="flex flex-col md:grid md:grid-cols-2 gap-10 items-center max-w-6xl w-full mx-auto">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-cyan-300 italic text-sm">Hi, I am</p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mt-1">
            MILAN
          </h1>

          <h2 className="mt-3 text-base sm:text-lg md:text-xl text-cyan-400">
            I am a{" "}
            <span>
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </h2>

          <p className="mt-4 text-gray-300 text-sm sm:text-base max-w-md leading-relaxed">
            I build intelligent systems, scalable APIs, and real-world applications.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-medium"
            >
              Hire Me
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-cyan-400 text-cyan-400"
            >
              View Projects
            </button>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full flex justify-center"
        >
          <div className="w-full max-w-sm">
            <div className="bg-black/60 backdrop-blur-lg border border-white/10 rounded-xl shadow-xl p-4">

              {/* Header */}
              <div className="flex gap-2 mb-2 items-center">
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                <p className="text-gray-400 text-xs ml-2">milan@portfolio</p>
              </div>

              {/* Code */}
              <pre className="text-xs sm:text-sm text-cyan-300 font-mono whitespace-pre-wrap">
{`const profile = {
  name: "Milan",
  role: "AI Developer",
  skills: ["Python","React","ML"],
};`}
              </pre>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}