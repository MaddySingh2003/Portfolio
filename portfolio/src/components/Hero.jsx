import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Terminal, Cpu, Code, Database } from "lucide-react";

const roles = [
  "Software Developer",
  "AI / Data Science Enthusiast",
  "Full Stack Developer",
  "Problem Solver",
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
        }, 80);
      } else {
        timerRef.current = setTimeout(() => setDeleting(true), 1500);
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
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center w-full relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-ai-neon/30 bg-ai-neon/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-ai-neon animate-pulse"></span>
            <span className="text-ai-neon font-mono text-xs">
              SYSTEM.ONLINE
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ai-neon to-ai-purple">
              Milan
            </span>
          </h1>

          <div className="h-12 mb-6">
            <h2 className="text-xl sm:text-2xl text-gray-300 font-mono">
              <span className="text-ai-purple mr-2">&gt;</span>
              {text}
              <span className="inline-block w-3 h-6 bg-ai-neon ml-1 animate-pulse"></span>
            </h2>
          </div>

          <p className="text-gray-400 max-w-lg mb-10 font-mono">
            I build real-world applications, scalable APIs, and AI-powered systems
            using modern technologies like FastAPI, Node.js, and Machine Learning.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3 bg-ai-neon text-black font-mono rounded-md hover:scale-105 transition flex items-center gap-2"
            >
              <Terminal size={16} /> Contact
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="px-6 py-3 border border-ai-border text-white font-mono rounded-md hover:border-ai-purple transition"
            >
              View Projects
            </button>
          </div>

          {/* ICONS */}
          <div className="mt-10 flex gap-6 text-gray-500">
            <Cpu size={26} />
            <Code size={26} />
            <Database size={26} />
          </div>
        </motion.div>

        {/* RIGHT TERMINAL */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-lg border border-ai-neon/20 rounded-xl">

            <div className="bg-[#12121A] px-4 py-3 flex justify-between border-b border-ai-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="text-gray-500 text-xs font-mono">
                milan@portfolio:~
              </div>
            </div>

            <div className="p-6 font-mono text-sm text-gray-300">
              <div className="text-green-400">$ load_profile</div>

              <pre className="mt-4">
                {`const developer = {
  name: "Milan",
  role: "Full Stack + AI Developer",
  skills: ["Python", "React", "FastAPI", "ML"],
  focus: "Building real-world systems"
};

developer.build();`}
              </pre>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}