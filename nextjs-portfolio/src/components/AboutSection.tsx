"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  const skills = [
    { name: "React" },
    { name: "Flutter" },
    { name: "Node.js" },
    { name: "Laravel" },
    { name: "MySQL" },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-space mb-4 text-foreground">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square max-w-xs sm:max-w-sm md:max-w-md mx-auto relative rounded-[2rem] overflow-hidden border-4 border-white shadow-xl shadow-primary/20">
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
              <Image
                src="/assets/me2.png"
                alt="Khoerunnisa Utami"
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://ui-avatars.com/api/?name=Khoerunnisa+Utami&size=512&background=78c8bb&color=fff";
                }}
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 sm:space-y-6 text-foreground/80 leading-relaxed font-jakarta text-sm sm:text-base"
          >
            <p>
              Hi there! I&apos;m Khoerunnisa Utami — but feel free to call me Tami. I&apos;m deeply passionate about technology, with interests spanning across software development and the growing world of artificial intelligence.
            </p>
            <p>
              My journey into programming started with a simple curiosity: how do things work behind the scenes? That curiosity quickly turned into a passion for building, solving real-world problems, and exploring new innovations in tech.
            </p>
            <p>
              While I may still be early in my career, I bring a strong desire to learn, and an eagerness to take on challenges head-first. I&apos;m excited about what lies ahead — not just for me, but for the impact I hope to make within the tech community and beyond.
            </p>

            <div className="pt-4 sm:pt-6">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 font-space">Core Technologies</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-lg shadow-sm border border-primary/10 hover:border-primary transition-colors text-foreground font-medium text-sm">
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
