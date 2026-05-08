"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Folder, ChevronDown, ChevronUp } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const projects = [
    {
      title: "Colabify",
      desc: "Real-time chat website enabling communication between users or group chats with websockets and AI LLM Chatbot features.",
      tech: ["React", "Tailwind", "Express.js", "MongoDB"],
      github: "https://github.com/Dimasbro12/frontend-Collabify",
      link: "https://frontend-collabify.vercel.app/",
      image: "/assets/project1/colabify.png",
    },
    {
      title: "POS KutoarjoGrosir",
      desc: "POS System website with tracking features and inventory management for UMKM KutoarjoGrosir.",
      tech: ["PHP", "Bootstrap", "MySQL"],
      github: "https://github.com/MCat-arch/POS",
      image: "/assets/project2/pos.png",
    },
    {
      title: "Learning Tracker",
      desc: "Website to track learning progress with features for task completion, notes, and resources.",
      tech: ["React", "Next.js", "MongoDB"],
      github: "https://github.com/MCat-arch/learning-tracker-21-react_ion-",
      link: "https://21reaction.vercel.app/",
      image: "/assets/learningTracker.png",
    },
    {
      title: "SangKala",
      desc: "Interactive digital learning media for Indonesian National Movement History using AI Chatbot technology.",
      tech: ["Flutter", "MongoDB", "OpenRouter"],
      github: "https://github.com/MCat-arch/Media_pembelajaran_AI",
      image: "/assets/sangkala.png",
    },
    {
      title: "NalarWiratama",
      desc: "Story-based mathematical logic learning application with a Diponegoro war theme and AI Chatbot assistance.",
      tech: ["Flutter", "OpenRouter API"],
      github: "https://github.com/MCat-arch/nalarwiratama",
      image: "/assets/NalarWiratama.png",
    },
    {
      title: "AURA: Panic Attack Detection",
      desc: "Research tool developed for academic research on panic attack detection using wearable device signals.",
      tech: ["Flutter", "Firestore"],
      github: "https://github.com/MCat-arch/FetchHealthConnect_App",
      image: "/assets/home_aura.jpeg",
    },
    {
      title: "Pocket ERP",
      desc: "A modern Point of Sale (POS) application designed specifically for small to medium-sized businesses. Streamlines sales, inventory, and customer management.",
      tech: ["Flutter", "Firebase"],
      github: "https://github.com/MCat-arch/kutoarjoGrosir_inventoryManagement",
      image: "/assets/dashb.jpeg",
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-16 sm:py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-space mb-4 text-foreground">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-[1.5rem] sm:rounded-[2rem] border-4 border-transparent hover:border-primary/20 overflow-hidden group hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-primary/5 flex flex-col h-full"
              >
                {/* Card header: icons */}
                <div className="p-5 sm:p-6 pb-0 flex justify-between items-center mb-3 sm:mb-4">
                  <Folder className="text-primary w-8 h-8 sm:w-10 sm:h-10" />
                  <div className="flex space-x-3 text-muted-foreground">
                    {project.github && (
                      <Link href={project.github} target="_blank" className="hover:text-primary transition-colors">
                        <FaGithub size={18} />
                      </Link>
                    )}
                    {project.link && (
                      <Link href={project.link} target="_blank" className="hover:text-primary transition-colors">
                        <ExternalLink size={18} />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Card body */}
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2 flex-grow flex flex-col">
                  <h3 className="text-base sm:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors font-space">
                    {project.title}
                  </h3>

                  {project.image && (
                    <div className="relative w-full h-40 sm:h-44 mb-4 rounded-xl overflow-hidden border border-border/30 bg-black/5 flex items-center justify-center">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLElement;
                          target.style.display = "none";
                        }}
                      />
                    </div>
                  )}

                  <p className="text-foreground/70 text-xs sm:text-sm mb-5 flex-grow font-jakarta leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs px-2.5 sm:px-3 py-1 bg-primary/10 text-primary rounded-full font-medium font-jakarta">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Toggle button */}
        <div className="mt-10 sm:mt-16 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-white rounded-full font-bold font-space text-sm sm:text-base hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-95"
          >
            {showAll ? (
              <>
                Show Less <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-y-1 transition-transform" />
              </>
            ) : (
              <>
                See All Projects <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
