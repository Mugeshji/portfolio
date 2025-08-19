import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Crypto Screener Application",
    description: "A powerful tool for tracking and analyzing cryptocurrency trends in real-time.",
    image: "/assets/project1.png",
    link: "#"
  },
  {
    id: 2,
    title: "Stock Market Dashboard",
    description: "An interactive dashboard to monitor stock prices and market trends efficiently.",
    image: "/assets/project1.png",
    link: "#"
  }
];

export default function Projects() {
  return (
    <div 
      className="relative px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16 overflow-hidden" 
      id="projects"
    >
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
              animationDuration: `${Math.random() * 6 + 4}s`
            }}
          />
        ))}
      </div>

      <h2 className="relative text-2xl lg:text-4xl text-center text-white z-10">
        My <span className="font-extrabold text-goldText">Projects</span>
      </h2>

      <div className="relative z-10 lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden shadow-lg shadow-goldGlow/30">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-goldText mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>

              <p className="font-light text-sm/6 lg:text-base text-gray-400">
                {project.description}
              </p>
              <a href={project.link} className="text-goldText mt-3 block hover:text-yellow-400" target="_blank" rel="noopener noreferrer">
                <TbExternalLink size={23} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
