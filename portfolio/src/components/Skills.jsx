import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Brain,
  Globe,
  Server,
  Cloud,
  Gamepad2,
  Smartphone,
  GitBranch,
} from "lucide-react";

const skills = [
  {
    title: "Programming Languages",
    icon: Code2,
    items: ["C", "C++", "Java", "Python", "R", "JavaScript"],
  },
  {
    title: "Frontend Development",
    icon: Globe,
    items: ["React", "Angular", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend Development",
    icon: Server,
    items: ["Node.js", "Spring Boot", "Django", "FastAPI", "REST APIs"],
  },
  {
    title: "Data Science & ML",
    icon: Brain,
    items: [
      "Machine Learning",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Streamlit",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
  },
  {
    title: "Cloud & Tools",
    icon: Cloud,
    items: [
      "AWS",
      "Vercel",
      "Netlify",
      "Render",
      "Supabase",
      "Postman",
    ],
  },
  {
    title: "Dev Tools",
    icon: GitBranch,
    items: ["Git", "Linux", "Figma"],
  },
  {
    title: "Game Development",
    icon: Gamepad2,
    items: ["Unity (C#)", "Unreal Engine"],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    items: ["Flutter", "Firebase"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-transparent relative">

      {/* Glow */}
      <div className="absolute w-[300px] h-[300px] bg-cyan-400/10 blur-[120px] top-20 right-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((s, i) => {
            const Icon = s.icon;

            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="
                  bg-black/40 backdrop-blur-xl border border-white/10
                  p-6 rounded-2xl
                  hover:border-cyan-400 hover:shadow-xl transition
                ">
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-cyan-400/0 group-hover:bg-cyan-400/10 blur-xl transition"></div>

                  {/* Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-lg font-semibold text-white">
                      {s.title}
                    </h3>
                  </div>

                  {/* Items */}
                  <div className="text-sm text-gray-400 leading-relaxed">
                    {s.items.map((item, idx) => (
                      <span key={idx}>
                        {item}
                        {idx !== s.items.length - 1 && " • "}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}