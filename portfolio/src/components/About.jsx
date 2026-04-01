import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Lightbulb } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import pho from "../img/pho_.jpg";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-transparent relative">
      {/* Soft background glow */}
      <div className="absolute w-[400px] h-[400px] bg-cyan-400/10 blur-[120px] top-10 left-1/2 transform -translate-x-1/2 -z-10 rounded-full"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95, rotate: -1 }}
            className="relative"
          >
            <img
              src={pho}
              alt="Milan"
              className="w-72 md:w-80 rounded-3xl shadow-2xl border-4 border-cyan-400/20 object-cover"
            />
            <div className="absolute -inset-2 rounded-3xl bg-cyan-400/20 blur-3xl -z-10"></div>
          </motion.div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">About Me</h2>

          <p className="text-sm font-semibold text-cyan-300 mb-4">
            AI | Data Science | Game Development | FullStack
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            Hello! I'm Milan Suryavanshi — an innovative developer passionate about
            building intelligent, interactive, and visually engaging applications.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
            I enjoy solving complex problems, optimizing systems, and exploring
            new technologies like FastAPI, Flutter, Node.js, and Machine Learning.
          </p>

          {/* FEATURES */}
          <div className="flex gap-6 mt-6">
            {[{ icon: Code, label: "Clean Code" }, { icon: Lightbulb, label: "Innovation" }].map(
              ({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-gray-300">
                  <Icon className="w-4 h-4 text-cyan-400" />
                  {label}
                </div>
              )
            )}
          </div>

          {/* BUTTON - Toggle Expanded */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-block mt-8 px-6 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
          >
            {expanded ? "Show Less" : "More About Me"}
          </button>
        </motion.div>
      </div>

      {/* Expanded Content */}
      {expanded && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 max-w-6xl mx-auto space-y-16"
        >
          {/* EDUCATION */}
          <section
            id="education"
            className="py-20 px-6 md:px-12 bg-[#020617] rounded-2xl shadow-xl"
          >
            <h2 className="text-3xl text-center text-cyan-400 font-bold mb-12">
              Education
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-[#0f1729] p-6 rounded-xl border-l-4 border-cyan-400 shadow-md hover:shadow-cyan-500/50 transition"
              >
                <h3 className="text-white font-semibold text-lg">
                  Maharishi Dayanand University Rohtak
                </h3>
                <p className="text-cyan-400 font-medium text-sm mt-1">
                  B.Tech in Computer Science (AI / Data Science)
                </p>
                <p className="text-gray-400 text-sm mt-1">2021 – 2025</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-[#0f1729] p-6 rounded-xl border-l-4 border-cyan-400 shadow-md hover:shadow-cyan-500/50 transition"
              >
                <h3 className="text-white font-semibold text-lg">High School</h3>
                <p className="text-cyan-400 font-medium text-sm mt-1">Science Stream (PCM)</p>
                <p className="text-gray-400 text-sm mt-1">Completed 2021</p>
              </motion.div>
            </div>
          </section>

          </motion.div>
      )}
    </section>
  );
}