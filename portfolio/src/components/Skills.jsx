import { motion } from "framer-motion";
import { Network, Database, LayoutTemplate, BrainCircuit } from "lucide-react";

const skillCategories = [
  {
    title: "AI & Data Science",
    icon: <BrainCircuit className="text-ai-purple w-7 h-7" />,
    skills: [
      { name: "Machine Learning", level: 80 },
      { name: "Scikit-learn", level: 85 },
      { name: "Pandas / NumPy", level: 85 },
      { name: "Matplotlib", level: 75 },
      { name: "Streamlit", level: 75 },
    ]
  },
  {
    title: "Backend Development",
    icon: <Database className="text-ai-green w-7 h-7" />,
    skills: [
      { name: "Python / FastAPI", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Spring Boot", level: 75 },
      { name: "Django", level: 75 },
      { name: "REST APIs", level: 85 },
    ]
  },
  {
    title: "Frontend Development",
    icon: <LayoutTemplate className="text-ai-neon w-7 h-7" />,
    skills: [
      { name: "React", level: 85 },
      { name: "Angular", level: 75 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML / CSS", level: 90 },
      { name: "JavaScript", level: 85 },
    ]
  },
  {
    title: "Databases",
    icon: <Database className="text-ai-green w-7 h-7" />,
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 80 },
      { name: "SQLite", level: 70 },
    ]
  },
  {
    title: "Tools & Cloud",
    icon: <Network className="text-yellow-400 w-7 h-7" />,
    skills: [
      { name: "Git", level: 90 },
      { name: "Linux", level: 80 },
      { name: "AWS", level: 70 },
      { name: "Vercel / Netlify", level: 80 },
      { name: "Render / Supabase", level: 75 },
      { name: "Postman", level: 85 },
    ]
  },
  {
    title: "Mobile & Game Dev",
    icon: <LayoutTemplate className="text-ai-neon w-7 h-7" />,
    skills: [
      { name: "Flutter", level: 80 },
      { name: "Firebase", level: 80 },
      { name: "Unity (C#)", level: 75 },
      { name: "Unreal Engine", level: 60 },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="w-full relative z-10 scroll-mt-24">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">
          Technical <span className="text-ai-neon text-glow">Arsenal</span>
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-ai-neon/50 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="neon-border rounded-xl group"
          >
            <div className="glass-panel p-8 h-full relative overflow-hidden bg-[#0A0A0F]/80">
              
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-ai-neon/10 rounded-full blur-[40px] group-hover:bg-ai-neon/20 transition"></div>

              <div className="flex items-center gap-4 mb-8 relative z-10 border-b border-white/5 pb-6">
                <div className="p-3 bg-black border border-ai-border rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6 relative z-10">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2 font-mono text-sm">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-ai-neon">{skill.level}%</span>
                    </div>

                    <div className="w-full h-2.5 bg-[#030305] rounded-full border border-ai-border overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="h-full bg-gradient-to-r from-ai-purple to-ai-neon rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}