import { Terminal } from "lucide-react";
import { FaCode, FaGithub, FaLinkedin, FaStackOverflow, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#030305]/90 border-t border-white/5 backdrop-blur-xl py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-3 group">
            <div className="p-2 bg-[#0A0A0F] border border-white/10 rounded-md group-hover:border-ai-neon/50 transition-colors">
              <Terminal className="text-ai-neon w-5 h-5 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-gray-400 font-mono text-sm">
              &copy; {year} Milan 
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-8">
            <a href="https://github.com/MaddySingh2003" className="text-gray-500 hover:text-ai-neon transition-colors transform hover:scale-125 hover:shadow-[0_0_15px_#00F0FF] rounded-full">
              <FaGithub size={22} />
            </a>

            <a
  href="https://leetcode.com/u/_MILAN_SINGH/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-500 hover:text-yellow-400 transition-colors transform hover:scale-125 hover:shadow-[0_0_15px_#FFA116] rounded-full"
>
  <SiLeetcode size={22} />
</a>
            <a href="https://stackoverflow.com/users/32536879/milan-suryavanshi" className="text-gray-500 hover:text-red-400 transition-colors transform hover:scale-125 hover:shadow-[0_0_15px_#00F0FF] rounded-full">
              <FaStackOverflow size={22}/>
            </a>
            <a href="https://www.linkedin.com/in/milan-suryavanshi/" className="text-gray-500 hover:text-ai-purple transition-colors transform hover:scale-125 hover:shadow-[0_0_15px_#8A2BE2] rounded-full">
              <FaLinkedin size={22} />
            </a>
            <a href="#" className="text-gray-500 hover:text-ai-green transition-colors transform hover:scale-125 hover:shadow-[0_0_15px_#00FF41] rounded-full">
              <FaTwitter size={22} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}