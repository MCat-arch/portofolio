"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const WORDS = ["Mobile Developer", "Web Developer", "Agentic AI Developer"];

export default function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentWord = WORDS[currentWordIndex];

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % WORDS.length);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
        }, 50);
      }
    } else {
      if (currentText === currentWord) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1500);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        }, 150);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-secondary-bg/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full py-12 sm:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-4 sm:space-y-6 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-space tracking-tight text-foreground">
              Hi, I&apos;m <span className="text-primary">Tami</span>
            </h1>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground/80 font-space h-9 sm:h-10">
              I&apos;m a <span className="text-primary">{currentText}</span>
              <span className="animate-pulse text-primary font-light">|</span>
            </h3>

            <p className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed mx-auto lg:mx-0">
              Always excited to dive into the magical world of programming, especially software development.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-2 justify-center lg:justify-start">
              <Link href="https://github.com/MCat-arch" target="_blank" className="p-3 bg-secondary-bg/50 rounded-full hover:bg-primary hover:text-white transition-all duration-300 text-foreground">
                <FaGithub size={20} />
              </Link>
              <Link href="https://www.linkedin.com/in/khoerunnisa-utami-853217295" target="_blank" className="p-3 bg-secondary-bg/50 rounded-full hover:bg-primary hover:text-white transition-all duration-300 text-foreground">
                <FaLinkedin size={20} />
              </Link>
              <Link href="https://www.instagram.com/khoerunis9" target="_blank" className="p-3 bg-secondary-bg/50 rounded-full hover:bg-primary hover:text-white transition-all duration-300 text-foreground">
                <FaInstagram size={20} />
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2 font-space justify-center lg:justify-start">
              <Link href="#about" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors flex items-center shadow-lg shadow-primary/30">
                About
              </Link>
              <Link href="#contact" className="px-6 py-3 bg-secondary-bg text-foreground rounded-full font-medium hover:bg-secondary-bg/80 transition-colors shadow-md">
                Contact
              </Link>
            </div>
          </motion.div>

          {/* Right: Terminal — visible on lg+ only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="w-full rounded-2xl bg-[#1e1e1e] border border-white/10 shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-500">
              {/* macOS window header */}
              <div className="flex items-center px-4 py-3 bg-[#2d2d2d]">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-xs text-gray-400 font-fira">developer.ts</div>
              </div>

              {/* Code body */}
              <div className="p-6 font-fira text-sm leading-relaxed overflow-x-auto">
                <div className="text-gray-400"><span className="text-pink-500">const</span> <span className="text-blue-400">profile</span> = {"{"}</div>
                <div className="pl-4 text-green-300">name: <span className="text-yellow-300">&apos;Khoerunnisa Utami&apos;</span>,</div>
                <div className="pl-4 text-green-300">role: <span className="text-yellow-300">&apos;Mobile Developer&apos;</span>,</div>
                <div className="pl-4 text-green-300">passion: <span className="text-yellow-300">&apos;Building impactful apps&apos;</span>,</div>
                <div className="pl-4 text-green-300">skills: <span className="text-gray-400">[</span></div>
                <div className="pl-8 text-yellow-300">&apos;Flutter&apos;<span className="text-gray-400">,</span> &apos;React&apos;<span className="text-gray-400">,</span> &apos;Next.js&apos;<span className="text-gray-400">,</span> &apos;Laravel&apos;</div>
                <div className="pl-4 text-gray-400">]</div>
                <div className="text-gray-400">{"}"}</div>
                <br />
                <div className="text-gray-400"><span className="text-pink-500">function</span> <span className="text-blue-400">greet</span>() {"{"}</div>
                <div className="pl-4"><span className="text-blue-400">console</span>.<span className="text-yellow-100">log</span>(<span className="text-yellow-300">&apos;Hello, World! Let&apos;s build together.&apos;</span>);</div>
                <div className="text-gray-400">{"}"}</div>
                <div className="mt-2 text-gray-400 animate-pulse">▋</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}