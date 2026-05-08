import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navbar-bg pt-16 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <Link href="/" className="text-2xl font-bold font-outfit mb-4 inline-block">
              Khoerunnisa <span className="text-primary">Utami</span>
            </Link>
            <p className="text-white/70 max-w-sm mt-2 font-fira">
              Building digital experiences with modern technologies.
            </p>
          </div>

          <div className="flex gap-4">
            <Link 
              href="https://github.com/MCat-arch" 
              target="_blank" 
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors"
            >
              <FaGithub size={20} />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/khoerunnisa-utami-853217295" 
              target="_blank" 
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors"
            >
              <FaLinkedin size={20} />
            </Link>
            <Link 
              href="https://www.instagram.com/khoerunis9" 
              target="_blank" 
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors"
            >
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm text-center md:text-left mb-4 md:mb-0 font-fira">
            &copy; {currentYear} Khoerunnisa Utami. All rights reserved.
          </p>
          <p className="text-white/60 text-sm flex items-center font-fira">
            Made with <span className="text-red-500 mx-1 animate-pulse">❤</span> 
          </p>
        </div>
      </div>
    </footer>
  );
}
