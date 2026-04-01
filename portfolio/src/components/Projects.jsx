import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "ShopNest AI [Ecom]",
    desc: "Full-stack e-commerce platform with ML-based price prediction and recommendation system.",
    tech: ["Angular", "Spring Boot", "PostgreSQL", "ML"],
    link: "https://shop-nest-ai.vercel.app/",
  },
  {
    title: "Skillmatch [ATS Resume Analyzer]",
    desc: "Smart job portal with resume scoring and intelligent job matching.",
    tech: ["Django", "FastAPI", "NLP"],
    link: "https://skillmatch-thtz.onrender.com/",
  },
  {
    title: "Market Basket Analysis",
    desc: "ML dashboard using Apriori algorithm for product pattern insights.",
    tech: ["Python", "Pandas", "Streamlit"],
    link: "http://mba-docker-env.eba-ztdubmfd.ap-south-1.elasticbeanstalk.com/",
  },
  {
    title: "Unity Kitchen Game",
    desc: "3D simulation game with physics and real-time interaction.",
    tech: ["Unity", "C#"],
    link: "https://github.com/MaddySingh2003/Kitchen-Game",
  },
  {
    title: "Fitness Mobile App",
    desc: "Cross-platform fitness tracking app with Firebase integration.",
    tech: ["Flutter", "Firebase"],
    link: "https://github.com/MaddySingh2003/Flutter-Demo",
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative">
      {/* Glow background */}
      <div className="absolute w-[300px] h-[300px] bg-cyan-400/10 blur-[120px] bottom-10 left-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
          Projects
        </h2>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              <div
                className="
                  relative bg-black/40 backdrop-blur-xl border border-white/10
                  p-6 rounded-2xl h-full flex flex-col justify-between
                  hover:border-cyan-400 hover:shadow-xl transition
                "
              >
                <div className="absolute inset-0 rounded-2xl bg-cyan-400/0 group-hover:bg-cyan-400/10 blur-xl transition pointer-events-none"></div>

                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-3">{p.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{p.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyan-400 text-sm hover:underline mt-2"
                >
                  View <FaExternalLinkAlt size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition font-medium"
          >
            {showAll ? "Show Less" : "View More Projects →"}
          </button>
        </div>
      </div>
    </section>
  );
}