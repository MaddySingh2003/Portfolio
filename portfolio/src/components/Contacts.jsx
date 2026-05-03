import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Terminal } from "lucide-react";
import { useState } from "react";

export default function Contacts() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = () => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("FILL_ALL_FIELDS");
      return;
    }

    setStatus("TRANSMITTING...");

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxKUHVgDpqbqbeGtREWiYweTV_5JOZty1BBdHZDpujGHRAezxI4iwYFzuE7Enwn_ZN1mg/exec",
        {
          method: "POST",
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (data.status === "success") {
        setStatus("DATA_SENT_SUCCESSFULLY");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("TRANSMISSION_FAILED");
      }
    } catch (err) {
      console.error(err);
      setStatus("SERVER_ERROR");
    }

    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section id="contact" className="w-full relative z-10 scroll-mt-24 pb-20">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">
          Establish <span className="text-ai-neon text-glow">Connection</span>
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-ai-neon/50 to-transparent"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/3 space-y-8"
        >
          {/* EMAIL */}
          <div className="glass-panel p-6 border-l-4 border-l-ai-neon">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-black/60 rounded-lg border border-white/5">
                <Mail className="text-ai-neon w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-mono mb-1">email_address</p>
                <p className="text-white font-medium tracking-wide">
                  Milansuryavanshi27@email.com
                </p>
              </div>
            </div>
          </div>

          {/* PHONE */}
          <div className="glass-panel p-6 border-l-4 border-l-ai-purple">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-black/60 rounded-lg border border-white/5">
                <Phone className="text-ai-purple w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-mono mb-1">secure_line</p>
                <p className="text-white font-medium tracking-wide">
                  +91 81786 62141
                </p>
              </div>
            </div>
          </div>

          {/* LOCATION */}
          <div className="glass-panel p-6 border-l-4 border-l-ai-green">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-black/60 rounded-lg border border-white/5">
                <MapPin className="text-ai-green w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-mono mb-1">server_location</p>
                <p className="text-white font-medium tracking-wide">
                  New Delhi, India
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-2/3"
        >
          <div className="neon-border rounded-xl">
            <div className="glass-panel p-8 md:p-10 bg-[#0A0A0F]">
              
              <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                <Terminal className="text-gray-500 w-5 h-5" />
                <span className="font-mono text-sm text-gray-500">
                  ~/contact/send_message.sh
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder='"Enter your name"'
                    className="w-full bg-[#030305] border border-white/10 rounded-md px-5 py-4 text-white"
                  />

                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder='"Enter your email"'
                    className="w-full bg-[#030305] border border-white/10 rounded-md px-5 py-4 text-white"
                  />
                </div>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder='"Enter your message..."'
                  className="w-full bg-[#030305] border border-white/10 rounded-md px-5 py-4 text-white"
                />

                {/* STATUS */}
                <div className="font-mono text-sm text-ai-green h-5">
                  {status}
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-ai-neon text-black font-bold rounded-md"
                >
                  Execute <Send size={18} />
                </button>

              </form>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}