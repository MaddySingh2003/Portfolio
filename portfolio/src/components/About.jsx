import { motion } from "framer-motion";
import { User, Shield, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="w-full relative z-10 scroll-mt-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">
          About <span className="text-ai-green text-glow">Me</span>
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-ai-green/50 to-transparent"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-center">
        
        {/* Left Side - Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-2/5 flex justify-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <div className="absolute inset-0 border-2 border-dashed border-ai-green/40 rounded-full animate-[spin_20s_linear_infinite] shadow-[0_0_15px_rgba(0,255,65,0.2)]"></div>
            <div className="absolute inset-4 border border-ai-neon/50 rounded-full animate-[spin_15s_linear_infinite_reverse] shadow-[0_0_15px_rgba(0,240,255,0.2)]"></div>
            
            <div className="absolute inset-8 bg-black/60 backdrop-blur-md rounded-full border border-ai-border shadow-[0_0_40px_rgba(0,255,65,0.3)] flex items-center justify-center overflow-hidden group">
              <User size={80} className="text-ai-green group-hover:scale-110 transition-transform duration-500" />
            </div>

            <div className="absolute top-0 left-1/2 w-4 h-4 bg-ai-neon rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-0 w-4 h-4 bg-ai-purple rounded-full animate-pulse"></div>
          </div>
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-3/5"
        >
          <div className="glass-panel p-8 relative border border-ai-green/20 hover:border-ai-green/50 transition-colors duration-500">
            
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <Shield size={120} />
            </div>

            <h3 className="text-2xl font-bold text-white mb-6">
              <span className="w-2 h-6 bg-ai-green inline-block mr-2 rounded-full"></span>
              Milan Suryavanshi
            </h3>

            <div className="space-y-4 text-gray-400 leading-relaxed font-mono text-sm sm:text-base">
              
              <p className="flex items-start gap-2">
                <span className="text-ai-green font-bold">&gt;</span>
                <span>
                  AI | Data Science | Game Development | Full Stack Developer
                </span>
              </p>

              <p className="flex items-start gap-2">
                <span className="text-ai-green font-bold">&gt;</span>
                <span>
                  I build intelligent, interactive, and visually engaging applications with a strong focus on real-world problem solving and system optimization.
                </span>
              </p>

              <p className="flex items-start gap-2">
                <span className="text-ai-green font-bold">&gt;</span>
                <span>
                  Experienced with FastAPI, Node.js, Flutter, and Machine Learning systems. I enjoy exploring advanced AI systems and scalable architectures.
                </span>
              </p>

              <p className="flex items-start gap-2">
                <span className="text-ai-green font-bold">&gt;</span>
                <span>
                  Passionate about building AI-driven products like interview systems, local assistants, and real-time applications.
                </span>
              </p>
            </div>

            {/* FEATURES */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-[#0A0A0F]/80 rounded-lg border border-ai-neon/30 flex items-center gap-4">
                <Zap className="text-ai-neon w-8 h-8" />
                <div>
                  <h4 className="text-white font-bold text-lg">Clean Code</h4>
                  <p className="text-xs text-ai-neon font-mono">Structured & scalable</p>
                </div>
              </div>

              <div className="p-4 bg-[#0A0A0F]/80 rounded-lg border border-ai-purple/30 flex items-center gap-4">
                <Shield className="text-ai-purple w-8 h-8" />
                <div>
                  <h4 className="text-white font-bold text-lg">Innovation</h4>
                  <p className="text-xs text-ai-purple font-mono">Creative solutions</p>
                </div>
              </div>
            </div>

            {/* EDUCATION */}
            <div className="mt-10 space-y-4">
              <h4 className="text-lg text-ai-green font-bold">Education</h4>

              <div className="p-4 bg-[#0A0A0F]/80 rounded-lg border border-ai-green/20">
                <p className="text-white font-semibold">
                  Maharishi Dayanand University Rohtak
                </p>
                <p className="text-sm text-ai-green">
                  B.Tech in Computer Science (AI / Data Science)
                </p>
                <p className="text-xs text-gray-400">2021 – 2025</p>
              </div>

              <div className="p-4 bg-[#0A0A0F]/80 rounded-lg border border-ai-green/20">
                <p className="text-white font-semibold">High School</p>
                <p className="text-sm text-ai-green">Science Stream (PCM)</p>
                <p className="text-xs text-gray-400">Completed 2021</p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}