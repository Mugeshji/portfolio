import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 110,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  const premiumBlackGradient =
    "linear-gradient(90deg, #000000 0%, #0d0d0d 40%, #1a1a1a 100%)";

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed lg:px-28 px-5 top-0 left-0 w-full z-50 p-5 transition-shadow duration-300 ${
        hasShadow ? "shadow-md" : "shadow-none"
      }`}
      style={{ background: premiumBlackGradient }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollToSection("home")}
          className="h-9 cursor-pointer"
          src="/assets/mklogo.PNG"
          alt="Logo"
        />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-x-7 font-semibold text-[#d4af37]">
          {["about", "skills", "projects", "contact"].map((section) => (
            <motion.li key={section} className="group" whileHover={{ scale: 1.1 }}>
              <button onClick={() => scrollToSection(section)} className="hover:text-[#ffd700]">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
              <motion.span
                className="w-0 transition-all duration-300 group-hover:w-full h-[2px] bg-[#d4af37] flex"
                layout
              ></motion.span>
            </motion.li>
          ))}
        </ul>

        {/* Resume Button */}
        <motion.a
          href="/assets/Mugesh_Resume.pdf" // <-- Path to your resume PDF
          download="Mugesh_Resume.pdf"    // <-- File name for download
          className="hidden relative lg:inline-block px-4 py-2 font-medium group"
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#d4af37] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-black border-2 border-[#d4af37] group-hover:bg-[#d4af37]"></span>
          <span className="relative text-[#d4af37] group-hover:text-black flex items-center gap-x-3">
            Resume <TbDownload size={16} />
          </span>
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden text-2xl text-[#d4af37]"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.2 }}
        >
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-0 right-0 h-full w-full shadow"
            style={{ background: premiumBlackGradient }}
          >
            <button
              className="absolute top-5 right-5 text-2xl text-[#d4af37]"
              onClick={() => setIsOpen(false)}
            >
              <HiX />
            </button>
            <ul className="flex flex-col items-start ml-16 mt-28 h-full gap-y-6 font-semibold text-[#d4af37]">
              {["about", "skills", "projects", "contact"].map((section) => (
                <motion.li key={section} className="border-b border-[#d4af37]" whileHover={{ scale: 1.1 }}>
                  <button onClick={() => scrollToSection(section)} className="hover:text-[#ffd700]">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </motion.li>
              ))}

              {/* Resume in mobile menu */}
              <motion.a
                href="/assets/Mugesh_Resume.pdf"
                download="Mugesh_Resume.pdf"
                className="relative inline-block px-4 py-2 font-semibold group"
                whileHover={{ scale: 1.1 }}
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#d4af37] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-black border-2 border-[#d4af37] group-hover:bg-[#d4af37]"></span>
                <span className="relative text-[#d4af37] group-hover:text-black flex items-center gap-x-3">
                  Resume <TbDownload size={16} />
                </span>
              </motion.a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
