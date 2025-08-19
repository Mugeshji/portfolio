import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div
      className="mt-0 bg-gradient-to-br from-black via-[#1a1a1a] to-[#3b2f2f] text-white"
      id="home"
    >
      <div className="flex justify-between py-16 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">
        
        {/* Left Section */}
        <motion.div
          className="lg:w-[45%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.div
            className="text-2xl lg:text-5xl flex flex-col mt-8 lg:mt-14 gap-2 lg:gap-5"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, ease: "easeInOut" },
              },
            }}
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Hello,&nbsp;
              <TypeAnimation
                sequence={[
                  "I am Mugesh Kumar",
                  1000,
                ]}
                speed={10}
                style={{
                  fontWeight: 600,
                  background: "linear-gradient(90deg, #FFD700, #FFC300, #FFB700)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  whiteSpace: "nowrap", // Keep name in one line
                }}
                repeat={Infinity}
              />
            </motion.h2>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <span
                className="font-extrabold"
                style={{
                  background: "linear-gradient(90deg, #FFD700, #FFA500)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Fullstack
              </span>{" "}
              <span
                className="font-extrabold"
                style={{
                  WebkitTextStroke: "1px #FFD700",
                  color: "transparent",
                }}
              >
                Developer
              </span>
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-[#f5deb3] text-sm lg:text-base mt-5 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Passionate about technology, I specialize in Web Development and Web Designing.
            I’m focused on building innovative solutions and continuously expanding my skills.
            My goal is to grow as a developer and contribute to impactful projects in the tech industry.
          </motion.p>

          <motion.div
            className="flex items-center gap-x-5 mt-10 lg:mt-14"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {[BiLogoGmail, IoLogoLinkedin, IoLogoTwitter, BsGithub].map(
              (Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="backdrop-blur-lg bg-white/10 p-3 rounded-full border border-[#FFD700]/50 text-white hover:text-black hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FFA500]"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              )
            )}
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="lg:w-[55%] w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img
            className="h-full w-full drop-shadow-[0_0_25px_rgba(255,215,0,0.4)]"
            src="/assets/hero-vector.svg"
            alt="Hero Vector"
          />
        </motion.div>
      </div>
    </div>
  );
}
