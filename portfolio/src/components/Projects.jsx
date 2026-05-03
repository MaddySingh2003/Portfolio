import { motion } from "framer-motion";
import { ExternalLink, Terminal } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "ShopNest AI [Ecom]",
    description:
      "Full-stack e-commerce platform with ML-based price prediction and recommendation system.",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1000&auto=format&fit=crop",
    tags: ["Angular", "Spring Boot", "PostgreSQL", "ML"],
    github: "https://github.com/MaddySingh2003/ShopNest-AI",
    live: "https://shop-nest-ai.vercel.app/",
  },
  {
    title: "Skillmatch [ATS Resume Analyzer]",
    description:
      "Smart job portal with resume scoring and intelligent job matching using NLP.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1000&auto=format&fit=crop",
    tags: ["Django", "FastAPI", "NLP"],
    github: "https://github.com/MaddySingh2003",
    live: "https://skillmatch-thtz.onrender.com/",
  },
  {
    title: "Market Basket Analysis",
    description:
      "ML dashboard using Apriori algorithm for product pattern insights.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tags: ["Python", "Pandas", "Streamlit"],
    github: "https://github.com/MaddySingh2003/Market-Basket-Analysis",
    live:
      "http://mba-docker-env.eba-ztdubmfd.ap-south-1.elasticbeanstalk.com/",
  },
  {
  title: "Unity Kitchen Game",
  description:
    "3D simulation game with physics and real-time interaction.",
  image:
    "https://images.unsplash.com/photo-1614294148960-9aa740632a87?q=80&w=1000&auto=format&fit=crop", // ✅ game-like environment
  tags: ["Unity", "C#"],
  github: "https://github.com/MaddySingh2003/Kitchen-Game",
  live: null,
},
  {
    title: "Fitness Mobile App",
    description:
      "Cross-platform fitness tracking app with Firebase integration.",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop",
    tags: ["Flutter", "Firebase"],
    github: "https://github.com/MaddySingh2003/Flutter-Demo",
    live: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full relative z-10 scroll-mt-24">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">
          Deployed <span className="text-ai-purple text-glow">Projects</span>
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-ai-purple/50 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-ai-neon to-ai-purple rounded-xl opacity-0 group-hover:opacity-100 transition blur-md"></div>

            <div className="glass-panel relative h-full flex flex-col overflow-hidden bg-[#0A0A0F]">
              
              {/* IMAGE */}
              <div className="h-56 overflow-hidden relative border-b border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute top-0 left-0 w-full bg-[#12121A]/80 p-2 flex justify-between border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                  </div>
                  <Terminal size={14} className="text-gray-400" />
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 flex-1 font-mono">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs text-ai-neon bg-ai-neon/10 border border-ai-neon/20 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                  
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white flex items-center gap-2 text-sm"
                    >
                      <FaGithub size={16} /> Code
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-ai-neon flex items-center gap-2 text-sm"
                    >
                      Live <ExternalLink size={16} />
                    </a>
                  )}

                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}