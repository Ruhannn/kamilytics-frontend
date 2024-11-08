import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

const navLinks = [
  { title: "About", url: "/about" },
  { title: "Ayaka", url: "/aya" },
  { title: "Dashboard", url: "/dashboard" },
];

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [hovered, setHovered] = useState(navLinks[0]);
  const [click, setClick] = useState(navLinks[0]);

  const modalVariants = {
    hidden: {
      y: "-100vh",
    },
    visible: {
      y: 0,
      transition: {
        type: "tween", // Set transition type to 'tween'
        duration: 0.3, // Specify duration
      },
    },
    exit: {
      y: "-100vh",
      transition: {
        type: "tween",
        duration: 0.3,
        delay: 0.3,
      },
    },
  };

  const linkItemVariants = {
    hidden: { opacity: 0, y: "50%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut", // Add ease-out easing function
      },
    },
    exit: {
      opacity: 0,
      y: "50%",
      transition: {
        duration: 0.1,
        ease: "easeOut", // Add ease-out easing function
      },
    },
  };

  const navLinksVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };
  const MotionLink = motion.create(Link);
  return (
    <nav className="px-4 py-4 text-text">
      <div className="container flex items-center justify-between mx-auto">
        <Link to="/" className="text-xl font-bold">
          kamilytics
        </Link>
        <ul className="flex items-center gap-6 cursor-pointer">
          {navLinks.map((navLink, index) => (
            <MotionLink
              to={navLink.url}
              key={index}
              onHoverStart={() => setHovered(navLink)}
              onHoverEnd={() => setHovered(click)}
              onClick={() => setClick(navLink)}
              className="relative hidden px-5 py-2 capitalize md:block font-extralight"
            >
              {navLink.title}
              {hovered === navLink && (
                <motion.span
                  style={{ opacity: 0.1 }}
                  layoutId="background"
                  className="absolute inset-0 rounded-md bg-primary"
                ></motion.span>
              )}
            </MotionLink>
          ))}

          <div>
            <ThemeToggle />
          </div>
          <div className="md:hidden">
            <FaBars
              onClick={() => {
                setShowModal(!showModal);
              }}
            />
          </div>
        </ul>
      </div>
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-[1000] bg-background"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <FaTimes
              className="absolute cursor-pointer text-text top-6 right-4"
              onClick={() => {
                setShowModal(!showModal);
              }}
              style={{ fontSize: "16px" }}
            />
            <motion.div
              className="relative w-full bg-background"
              variants={navLinksVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex flex-col items-center justify-center h-full gap-8">
                {navLinks.map((link, index) => (
                  <MotionLink
                    onClick={() => {
                      setShowModal(!showModal);
                    }}
                    to={link.url}
                    key={index}
                    className="text-2xl font-light cursor-pointer text-text"
                    variants={linkItemVariants}
                  >
                    {link.title}
                  </MotionLink>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
