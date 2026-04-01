import { Linkedin, Github, Instagram, Mail } from "lucide-react";

export default function Social() {
  return (
    <section id="social" className="py-24 px-6 md:px-12 bg-[#0f1729]">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl text-cyan-400 mb-4">
          Connect with Me
        </h2>

        <p className="text-gray-400 mb-10">
          Explore my work or connect with me across platforms.
        </p>

        {/* Icons */}
        <div className="flex justify-center gap-6 mb-12">
          <a href="https://linkedin.com" className="social-icon"><Linkedin /></a>
          <a href="https://github.com" className="social-icon"><Github /></a>
          <a href="https://instagram.com" className="social-icon"><Instagram /></a>
          <a href="mailto:MilanSuryavanshi27@gmail.com" className="social-icon"><Mail /></a>
        </div>

        {/* Screenshots */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="ss-card">
            <img src="/image/linkedin.png" alt="linkedin" />
            <p>LinkedIn Profile</p>
          </div>

          <div className="ss-card">
            <img src="/image/git.png" alt="github" />
            <p>GitHub Projects</p>
          </div>

          <div className="ss-card">
            <img src="/image/insta.png" alt="instagram" />
            <p>Instagram Updates</p>
          </div>
        </div>

      </div>
    </section>
  );
}