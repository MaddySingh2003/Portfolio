import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";

import pythonCert from "../assets/certificates/python-cr.png";
import awsCert from "../assets/certificates/aws-cr.png";

const certifications = [
  {
    title: "Python Certification",
    issuer: "GUVI x HCL",
    date: "June 2026",
    image: pythonCert,
    color: "ai-neon",
    description:
      "Successfully completed Python Programming certification program.",
  },
  {
    title: "AWS Industrial Manufacturing",
    issuer: "AWS Training & Certification",
    date: "June 2026",
    image: awsCert,
    color: "ai-purple",
    description:
      "Connecting Systems and Machines to AWS for Industrial Manufacturing.",
  },
];

export default function Achiev() {
  return (
    <section
      id="achievements"
      className="w-full relative z-10 scroll-mt-24"
    >
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">
          Achievement{" "}
          <span className="text-ai-green text-glow">
            Vault
          </span>
        </h2>

        <div className="h-[1px] flex-1 bg-gradient-to-r from-ai-green/50 to-transparent"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-ai-neon to-ai-purple opacity-0 blur-md group-hover:opacity-100 transition duration-500"></div>

            <div className="glass-panel relative overflow-hidden rounded-xl border border-white/10 bg-[#0A0A0F]">
              
              <div className="relative overflow-hidden h-64 border-b border-white/10">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute top-0 left-0 w-full bg-black/70 backdrop-blur-md p-3 flex justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>

                  <ShieldCheck className="text-ai-neon" size={18} />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="text-ai-neon" />
                  <h3 className="text-xl font-bold text-white">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-ai-green text-sm font-mono">
                  {cert.issuer}
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  {cert.date}
                </p>

                <p className="text-gray-400 mt-4 text-sm font-mono leading-relaxed">
                  {cert.description}
                </p>

                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}