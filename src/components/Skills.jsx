import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaDatabase, FaJava, FaGithub } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";
import { SiMysql } from "react-icons/si";

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "JavaScript", icon: <FaJs size={50} /> },
    { id: 2, name: "React", icon: <FaReact size={50} /> },
    { id: 3, name: "Node.js", icon: <FaNodeJs size={50} /> },
    { id: 4, name: "GitHub", icon: <FaGithub size={50} /> },
    { id: 5, name: "MongoDB", icon: <FaDatabase size={50} /> },
    { id: 6, name: "Java", icon: <FaJava size={50} /> },
    { id: 7, name: "MySQL", icon: <SiMysql size={50} /> },
    { id: 8, name: "Next.js", icon: <RiNextjsFill size={50} /> },
    { id: 9, name: "Tailwind", icon: <RiTailwindCssFill size={50} /> },
    { id: 10, name: "Figma", icon: <CgFigma size={50} /> },
  ]);

  const [experiences] = useState([
   {
  id: 1,
  company: "Expertisor Academy",
  role: "Freelance FullStack Trainer",
  period: "Jan 2025 - present",
  description:
    "Delivered hands-on training in Full Stack development covering Java, React, Node.js, and databases, with a strong focus on building real-world applications, coding best practices, and career-oriented guidance.",
}
,
    {
      id: 2,
      company: "Uniq Technologies",
      role: "Freelance Springboot Trainer",
      period: "Nov 2022 - Sep 2024",
      description:
        "Conducted practical Springboot training and mentoring with real-time coding and project guidance, while helping learners strengthen problem-solving skills and prepare for interviews.",
    },
{
  id: 3,
  company: "Green Technologies",
  role: "Freelance Java Trainer",
  period: "Aug 2021 - Sep 2022",
  description:
    "Conducted comprehensive Java training sessions covering Core Java, OOPs, Collections, Exception Handling, Multithreading, and Java 8 features, while guiding learners with practical coding exercises and real-time project applications.",
},

  ]);

  return (
    <div className="relative mt-3 lg:mt-16 overflow-hidden" id="skills">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-[#1a1a1a] to-black animate-gradientMove"></div>

      {/* Golden particles overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="absolute bg-goldGlow rounded-full opacity-70 animate-float"
            style={{
              width: `${Math.random() * 6 + 4}px`,
              height: `${Math.random() * 6 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 6 + 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 lg:px-28 py-10">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-[#d4af37]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-7 lg:mt-16 place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-black border-2 text-white hover:text-black hover:bg-[#d4af37] transition-all cursor-pointer border-[#d4af37] rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: skill.id * 0.1 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Experience */}
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-[#d4af37] mt-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        <div className="my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black p-5 border border-[#d4af37] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                {/* Removed logo, title starts immediately */}
                <h2 className="font-semibold text-[#d4af37] text-lg lg:text-xl">
                  {exp.role} at {exp.company}
                </h2>
                <span className="text-[#d4af37] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#d4af37] mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
