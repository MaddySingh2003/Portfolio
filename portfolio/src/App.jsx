import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import ThreeBackground from "./components/ThreeBackground";

// Custom Cursor Component
const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-ai-neon pointer-events-none z-[9999] mix-blend-screen shadow-[0_0_10px_#00F0FF]"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-ai-purple rounded-full shadow-[0_0_8px_#8A2BE2]"></div>
    </motion.div>
  );
};

// Interactive Nebula Background Component (Removed)

export default function App() {
  return (
    <div className="relative min-h-screen text-white bg-transparent overflow-x-hidden selection:bg-ai-neon selection:text-black cursor-none">
      
      <CustomCursor />
      <ThreeBackground />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <Navbar />
        <main className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col gap-32 py-20">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contacts />
        </main>
        <Footer />
      </div>
    </div>
  );
}