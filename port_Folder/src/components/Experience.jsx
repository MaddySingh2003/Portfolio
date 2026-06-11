import { motion } from "framer-motion";
import { GitCommit, GitBranch, GitMerge } from "lucide-react";

const experiences = [
  {
    role: "Software & AI Development",
    company: "Personal & Academic Projects",
    period: "2021 – 2025",
    description:
      "Built full-stack applications integrating machine learning models. Designed scalable REST APIs using Spring Boot and FastAPI, and optimized SQL queries for performance. Developed real-world AI systems including dashboards and automation tools.",
    icon: <GitMerge className="text-ai-neon w-6 h-6" />,
    color: "text-ai-neon",
    borderColor: "border-ai-neon",
    bgColor: "bg-ai-neon/10",
    shadow: "shadow-[0_0_20px_rgba(0,240,255,0.4)]"
  },
  {
    role: "AI & Data Science",
    company: "Machine Learning Projects",
    period: "Python • ML",
    description:
      "Developed Market Basket Analysis using Apriori algorithm and built an ATS Resume Scoring system. Created recommendation systems and predictive models using Scikit-learn, Pandas, and NumPy.",
    icon: <GitBranch className="text-ai-purple w-6 h-6" />,
    color: "text-ai-purple",
    borderColor: "border-ai-purple",
    bgColor: "bg-ai-purple/10",
    shadow: "shadow-[0_0_20px_rgba(138,43,226,0.4)]"
  },
  {
    role: "Game & App Development",
    company: "Unity & Flutter Projects",
    period: "Unity • Flutter",
    description:
      "Built a 3D Unity simulation game using C# and developed cross-platform Flutter apps with Firebase integration. Implemented physics systems, UI logic, and real-time interactions.",
    icon: <GitCommit className="text-ai-green w-6 h-6" />,
    color: "text-ai-green",
    borderColor: "border-ai-green",
    bgColor: "bg-ai-green/10",
    shadow: "shadow-[0_0_20px_rgba(0,255,65,0.4)]"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="w-full relative z-10 scroll-mt-24">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">
          Execution <span className="text-gray-400">Log</span>
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-gray-500/50 to-transparent"></div>
      </div>

      <div className="relative max-w-5xl mx-auto">

        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-ai-neon via-ai-purple to-transparent transform md:-translate-x-1/2"></div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
            >

              {/* Timeline Icon */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 mt-1.5 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-[#030305] border-2 border-ai-border z-10"></div>
                <div
                  className={`absolute w-14 h-14 rounded-full ${exp.bgColor} flex items-center justify-center border border-white/10 backdrop-blur-md z-20 ${exp.shadow}`}
                >
                  {exp.icon}
                </div>
              </div>

              {/* Content */}
              <div
                className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-16" : "md:pr-16"
                  }`}
              >
                <div
                  className={`glass-panel p-8 border-t-2 ${exp.borderColor} relative overflow-hidden`}
                >
                  <div
                    className={`absolute -right-10 -top-10 w-40 h-40 ${exp.bgColor} rounded-full blur-[40px] opacity-40`}
                  ></div>

                  <div className="relative z-10">
                    <span className="font-mono text-sm text-gray-400 mb-3 inline-block px-3 py-1 bg-white/5 rounded-full border border-white/10">
                      {exp.period}
                    </span>
                    <h3 className={`text-2xl font-bold ${exp.color} mb-2`}>
                      {exp.role}
                    </h3>
                    <h4 className="text-xl text-white font-medium mb-5">
                      {exp.company}
                    </h4>
                    <p className="text-gray-400 text-base leading-relaxed font-mono">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}