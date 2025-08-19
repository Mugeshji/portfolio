import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { BiLogoGmail } from 'react-icons/bi';
import { BsInstagram, BsWhatsapp, BsLinkedin } from 'react-icons/bs';
import { IoMdMail } from "react-icons/io";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  // Notification state
  const [notification, setNotification] = useState(null);

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000); // disappear after 3s
  };

  // update form state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Gmail click handler
  const handleGmailClick = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showNotification("⚠️ Please fill the form before sending via Gmail!");
      return;
    }
    const subject = encodeURIComponent(`Portfolio Enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nWebsite: ${formData.website}\nMessage: ${formData.message}`
    );
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=mukeshm50266@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailLink, "_blank");
  };

  // WhatsApp click handler
  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showNotification("⚠️ Please fill the form before sending via WhatsApp!");
      return;
    }
    const text = encodeURIComponent(
      `Hi, I would like to enquire.\n\nName: ${formData.name}\nEmail: ${formData.email}\nWebsite: ${formData.website}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/918939295725?text=${text}`, "_blank");
  };

  return (
    <div
      className="relative px-5 lg:px-28 py-16 overflow-hidden min-h-screen flex items-center"
      id="contact"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-[#1a1a1a] to-black animate-gradientMove" />

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

      {/* Notification Toast */}
      {notification && (
        <motion.div
          initial={{ y: -80, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -80, opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="fixed top-5 right-5 bg-[#FFD700] text-black px-6 py-3 rounded-lg shadow-lg font-semibold z-50"
        >
          {notification}
        </motion.div>
      )}

      {/* Main content */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full"
      >
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl lg:text-4xl text-center text-white"
        >
          Contact <span className="font-extrabold">Me</span>
        </motion.h2>

        <div className="flex justify-between items-center mt-10 lg:mt-16 flex-col lg:flex-row gap-10">
          {/* Left: Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-[45%] w-full"
          >
            <form className="w-full space-y-5">
              <input
                className="border-2 px-5 py-3 border-[#FFD700] rounded placeholder:text-[#71717A] text-sm w-full bg-white/95 text-black"
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                className="border-2 px-5 py-3 border-[#FFD700] rounded placeholder:text-[#71717A] text-sm w-full bg-white/95 text-black"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                className="border-2 px-5 py-3 border-[#FFD700] rounded placeholder:text-[#71717A] text-sm w-full bg-white/95 text-black"
                type="text"
                name="website"
                placeholder="Your website (If exists)"
                value={formData.website}
                onChange={handleChange}
              />
              <textarea
                className="resize-none border-2 px-5 py-3 h-32 border-[#FFD700] placeholder:text-[#71717A] rounded text-sm w-full bg-white/95 text-black"
                name="message"
                placeholder="How can I help?*"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="flex justify-between gap-5 flex-col lg:flex-row"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  type="submit"
                  className="bg-black justify-center w-fit lg:w-auto lg:flex-1 hover:shadow-lg text-white px-5 py-3 rounded flex items-center gap-x-3 font-medium border border-[#FFD700]"
                >
                  Get In Touch
                </motion.button>

                {/* Social logos */}
                <div className="flex items-center gap-x-3 lg:gap-x-5">
                  <motion.a
                    href="#"
                    onClick={handleGmailClick}
                    className="bg-white p-3 rounded border-2 border-[#FFD700]
                      transition-all duration-300
                      hover:bg-black hover:text-[#FFD700] hover:border-[#FFD700]
                      hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.9)]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <BiLogoGmail className="w-5 h-5" />
                  </motion.a>

                  <motion.a
                    href="#"
                    onClick={handleWhatsAppClick}
                    className="bg-white p-3 rounded border-2 border-[#FFD700]
                      transition-all duration-300
                      hover:bg-black hover:text-[#FFD700] hover:border-[#FFD700]
                      hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.9)]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <BsWhatsapp className="w-5 h-5" />
                  </motion.a>

                  {/* ✅ LinkedIn Redirect */}
                  <motion.a
                    href="https://www.linkedin.com/in/mugesh-kumar-m-101a82359/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded border-2 border-[#FFD700]
                      transition-all duration-300
                      hover:bg-black hover:text-[#FFD700] hover:border-[#FFD700]
                      hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.9)]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <BsLinkedin className="w-5 h-5" />
                  </motion.a>

                  {/* ✅ Instagram Redirect */}
                  <motion.a
                    href="https://www.instagram.com/wingora.official/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded border-2 border-[#FFD700]
                      transition-all duration-300
                      hover:bg-black hover:text-[#FFD700] hover:border-[#FFD700]
                      hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.9)]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <BsInstagram className="w-5 h-5" />
                  </motion.a>
                </div>
              </motion.div>
            </form>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-[45%] w-full text-center lg:text-left"
          >
            <div className="font-extrabold text-2xl lg:text-5xl space-y-2 lg:space-y-4 text-white">
              <h2>
                Let's <span className="text-[#FFD700]">talk</span> for
              </h2>
              <h2>
                <span className="text-[#FFD700]">Something special</span>
              </h2>
            </div>

            <p className="text-gray-400 text-sm/6 lg:text-base mt-4 lg:mt-6 max-w-lg mx-auto lg:mx-0">
              I seek to push the limits of creativity to create highly engaging,
              user-friendly, and memorable interactive experiences.
            </p>

            <div className="font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-4 text-white">
              <motion.a
                whileHover={{ x: 5 }}
                className="
                  flex items-center gap-2 group transition-all duration-300
                  hover:text-[#FFD700] hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.9)]
                  justify-center lg:justify-start
                "
                href="mailto:mukeshm50266@gmail.com"
              >
                <span className="border-2 transition-all border-[#FFD700] rounded-full p-2">
                  <IoMdMail className="w-5 h-5" />
                </span>
                mukeshm50266@gmail.com
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
