import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 sec for testing

    return () => clearTimeout(timer);
  }, []);

  // ✅ THIS IS THE KEY FIX
  if (loading) {
    return <Preloader />;
  }

  return (
    <>
    <div className="bg-[#0f1729] ">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      </div>
    </>
  );
}

export default App;