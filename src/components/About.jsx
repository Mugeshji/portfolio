import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div
      id="about"
      className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row 
                 bg-gradient-to-br from-black via-[#0a0a0a] to-black relative 
                 overflow-hidden text-white py-16"
    >
      {/* Golden animated background details */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[200%] h-[200%] bg-[radial-gradient(circle_at_20%_20%,rgba(255,215,0,0.15)_0%,transparent_60%),radial-gradient(circle_at_80%_80%,rgba(255,215,0,0.1)_0%,transparent_50%)] animate-[spin_20s_linear_infinite]"></div>
      </div>

      {/* Left image */}
      <motion.div
        className="lg:w-1/2 relative z-10 flex justify-center items-center mb-10 lg:mb-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img
          src="/assets/about-me.svg"
          alt="About Me Illustration"
          className="w-full max-w-[500px] lg:max-w-[650px] rounded-xl shadow-lg"
        />
      </motion.div>

      {/* Right text */}
      <motion.div
        className="lg:w-1/2 relative z-10 lg:pl-16"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0 text-gold font-bold">
          About <span className="text-[#FFD700]">Me</span>
        </h2>

        {/* Intro */}
        <p className="text-gray-300 text-sm/6 lg:text-base mt-6">
          Hi, I'm a passionate <span className="text-[#FFD700] font-semibold">Full Stack Developer</span> who loves building dynamic and scalable web applications. 
          My focus is on creating seamless user experiences on the frontend while writing optimized and secure code on the backend.
        </p>

        {/* Education */}
        <p className="text-gray-300 text-sm/6 lg:text-base mt-6">
          I completed my <span className="text-[#FFD700] font-semibold">Bachelor of Engineering in Mechanical</span> at 
          <span className="text-[#FFD700] font-semibold"> Ramakrishna Institute of Technology</span>, 
          graduating in <span className="text-[#FFD700] font-semibold">2021</span>.
        </p>

        {/* Projects / Skills */}
        <p className="text-gray-300 text-sm/6 lg:text-base mt-6">
          My technical expertise includes working with <span className="text-[#FFD700] font-semibold">React.js, Next.js, and TailwindCSS</span> for 
          frontend development, <span className="text-[#FFD700] font-semibold">Node.js, Express, and Spring Boot</span> for backend, and databases 
          like <span className="text-[#FFD700] font-semibold">MySQL and MongoDB</span>.
        </p>

        <p className="text-gray-300 text-sm/6 lg:text-base mt-6">
          I have built projects ranging from <span className="text-[#FFD700] font-semibold">portfolio websites and e-commerce platforms </span> 
          to <span className="text-[#FFD700] font-semibold">full-fledged learning management systems</span>. 
          These projects helped me strengthen my problem-solving skills and gain <br></br>real-world experience in full stack development.
        </p>
      </motion.div>
    </div>
  );
}
