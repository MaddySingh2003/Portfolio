import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

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
        alert("Message sent ✅");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Error sending message ❌");
      }
    } catch (err) {
      alert("Error sending message ❌");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <section id="contact" className=" py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Get in Touch
          </h2>
          <p className="text-gray-400 mt-3">
            Let’s build something great together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <Mail size={18} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">Milansuryavanshi27@email.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <Phone size={18} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+91 81786 62141</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <MapPin size={18} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white">NEW DELHI</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/MaddySingh2003"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:scale-110 transition-all duration-300"
              >
                <FaGithub className="text-gray-400 group-hover:text-white text-lg transition" />
              </a>

              <a
                href="www.linkedin.com/in/milan-suryavanshi"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin className="text-gray-400 group-hover:text-white text-lg transition" />
              </a>

              <a
                href="https://www.instagram.com/milan_singh_suryavanshi?igsh=MWg2cHpiOXdxYTcycg=="
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:scale-110 transition-all duration-300"
              >
                <FaInstagram className="text-gray-400 group-hover:text-white text-lg transition" />
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows="5"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black py-3 rounded-xl transition hover:scale-[1.02] ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Message"} <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}