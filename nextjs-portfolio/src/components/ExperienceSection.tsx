"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("education");

  const tabs = [
    { id: "education", label: "University", icon: GraduationCap },
    { id: "work", label: "Works", icon: Briefcase },
    { id: "cert", label: "Certification", icon: Award },
  ];

  const experienceData = {
    education: [
      {
        title: "Google Developer Group on Campus Unesa",
        role: "Vice Head of Academy",
        period: "2025",
        desc: [
          "Organized pre-learning series preparation and curriculum planning for a community totaling 300+ members.",
          "Managing and conducted weekly meetings with all 5 divisional mentors of Academy",
        ],
      },
      {
        title: "Information System Lab Assistant",
        role: "Lab Assistant",
        period: "2025",
        desc: [
          "Managed and organized laboratory resources to ensure a conducive learning environment",
          "Supported students in practical sessions, facilitating hands-on learning in information systems.",
        ],
      },
      {
        title: "SLP Community",
        role: "Mobile Development Core Team",
        period: "2024 - 2025",
        desc: [
          "Developed structured learning paths for mobile development training sessions",
          "Designed comprehensive training modules, materials, and hands-on projects",
          "Delivered flutter mobile development training sessions",
        ],
      },
    ],
    work: [
      {
        title: "PT Amanah Karya",
        role: "Praktik Proyek Industri",
        period: "November - Januari 2026",
        desc: [
          "Collaborated with a team of 6 members to build a production-ready Event Scanner mobile application",
          "Developed the ticket scanner feature, which included automatic camera-based barcode scanning",
        ],
      },
      {
        title: "PT Toshin Prima Fine Blanking",
        role: "Software Engineer Intern",
        period: "January - July 2026",
        desc: [
          "Developed TPF Mobile, a full-stack application featuring 6 core modules",
          "Built the frontend and Integrate Machine Learning creating an intuitive interface in Flutter",
        ],
      },
    ],
    cert: [
      {
        title: "2024 Certifications",
        period: "2024",
        desc: [
          "Dicoding: Belajar Membuat Frontend Web",
          "Dicoding: Belajar Dasar Pemrograman Web",
          "SBI Hacker Software 2024: Flutter",
          "Markas Surabaya: Building With React",
        ],
      },
      {
        title: "2025 Certifications",
        period: "2025",
        desc: [
          "Bootcamp LLM Digiclub & Dunia Coding",
          "SBI Hacker Software 2025: Kotlin",
        ],
      },
      {
        title: "2026 Certifications",
        period: "2026",
        desc: [
          "BNSP Junior Mobile App Developer",
          "PLAN Indonesia: UI/UX Designer",
        ],
      },
    ],
  };

  return (
    <section id="experience" className="py-16 sm:py-24 bg-secondary-bg/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-space mb-4 text-foreground">Journey</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Tabs — scrollable on mobile */}
        <div className="flex justify-center mb-10 sm:mb-12 overflow-x-auto pb-1">
          <div className="inline-flex bg-white p-1 rounded-xl shadow-sm border border-border/50 flex-shrink-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 font-space text-sm sm:text-base whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-md"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                <tab.icon size={16} className="mr-1.5 sm:mr-2 flex-shrink-0" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="relative min-h-[350px] sm:min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 sm:space-y-8"
            >
              {experienceData[activeTab as keyof typeof experienceData].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-6 md:p-8 border border-white shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-primary transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out"></div>

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-2 sm:gap-4">
                    <div>
                      <h3 className="text-base sm:text-xl font-bold text-foreground font-space">{item.title}</h3>
                    </div>
                    <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-secondary-bg/30 text-primary rounded-full text-xs sm:text-sm font-medium whitespace-nowrap self-start">
                      {item.period}
                    </span>
                  </div>

                  <ul className="space-y-2 sm:space-y-3 mt-3 sm:mt-4">
                    {item.desc.map((point, i) => (
                      <li key={i} className="flex text-foreground/80 items-start font-jakarta text-sm sm:text-base">
                        <span className="mr-3 text-primary mt-0.5 flex-shrink-0">▹</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
