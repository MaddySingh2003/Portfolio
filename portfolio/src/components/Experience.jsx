import { motion } from "framer-motion";
import {
  Briefcase,
  Brain,
  Gamepad2,
  Code2,
  Database,
  Globe,
  Server,
  Cloud,
  GitBranch,
  Cpu,
} from "lucide-react";

const techStack = [
  // Frontend
  { icon: Globe, label: "React" },
  { icon: Globe, label: "Angular" },
  { icon: Globe, label: "Tailwind CSS" },

  // Backend
  { icon: Server, label: "Node.js" },
  { icon: Server, label: "Spring Boot" },
  { icon: Server, label: "Django" },
  { icon: Server, label: "FastAPI" },

  // Languages
  { icon: Code2, label: "Java" },
  { icon: Code2, label: "Python" },
  { icon: Code2, label: "C++" },
  { icon: Code2, label: "JavaScript" },

  // Databases
  { icon: Database, label: "MongoDB" },
  { icon: Database, label: "PostgreSQL" },
  { icon: Database, label: "MySQL" },

  // AI / ML
  { icon: Brain, label: "Machine Learning" },
  { icon: Brain, label: "Scikit-learn" },
  { icon: Brain, label: "Pandas" },
  { icon: Brain, label: "NumPy" },

  // Tools
  { icon: GitBranch, label: "Git" },
  { icon: Cpu, label: "Linux" },
  { icon: Cloud, label: "AWS" },
  { icon: Cloud, label: "Vercel" },
  { icon: Cloud, label: "Netlify" },
];
// 🔥 Timeline (REAL from your resume)
const timeline = [
  {
    icon: Briefcase,
    title: "Software & AI Development",
    period: "2021 – 2025",
    points: [
      "Built full-stack applications integrating ML models",
      "Designed scalable REST APIs (Spring Boot, FastAPI)",
      "Optimized SQL queries & database performance",
      "Developed real-world AI systems & dashboards",
    ],
  },
  {
    icon: Brain,
    title: "AI & Data Science",
    period: "Python • ML",
    points: [
      "Market Basket Analysis (Apriori algorithm)",
      "ATS Resume Scoring system",
      "Recommendation systems & predictive models",
    ],
  },
  {
    icon: Gamepad2,
    title: "Game & App Development",
    period: "Unity • Flutter",
    points: [
      "Built 3D Unity simulation game (C#)",
      "Developed Flutter apps with Firebase",
      "Handled physics, UI logic & real-time interaction",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-12 bg-transparent relative"
    >
      {/* Glow */}
      <div className="absolute w-[300px] h-[300px] bg-cyan-400/10 blur-[120px] top-20 left-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
          Experience
        </h2>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* 🔹 LEFT SIDE → TECH STACK */}
          <div className="flex flex-wrap gap-4 content-start">
            {techStack.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 
                bg-black/40 backdrop-blur-xl border border-white/10 
                rounded-xl text-sm text-gray-300
                hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                <Icon className="w-4 h-4" />
                {label}
              </div>
            ))}
          </div>

          {/* 🔹 RIGHT SIDE → TIMELINE */}
          <div className="lg:col-span-2 space-y-6">
            {timeline.map(({ icon: Icon, title, period, points }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="
                  bg-black/40 backdrop-blur-xl border border-white/10
                  p-6 rounded-2xl
                  hover:border-cyan-400 hover:shadow-xl transition
                "
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-white font-semibold">{title}</h3>
                  <span className="text-xs text-gray-400 ml-auto">
                    {period}
                  </span>
                </div>

                {/* Points */}
                <ul className="space-y-2">
                  {points.map((p) => (
                    <li
                      key={p}
                      className="text-sm text-gray-400 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2"></span>
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}