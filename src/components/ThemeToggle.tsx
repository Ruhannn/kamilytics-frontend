import { useRef } from "react";
import { flushSync } from "react-dom";
import { BiMoon, BiSun } from "react-icons/bi";

import { checkMotion } from "../utils/checkMotion";
import { useThemeContext } from "../provider/ThemeProvider";
import { motion } from "framer-motion";

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useThemeContext();
  const ref = useRef<HTMLDivElement>(null);

  const toggleDarkMode = async (newState: boolean) => {
    // Return early if View Transition API is not supported or user prefers reduced motion
    if (!ref.current || checkMotion()) {
      setTheme(newState ? "dark" : "light");
      return;
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newState ? "dark" : "light");
      });
    }).ready;

    const { top, left, width, height } = ref.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 800,
        easing: "ease",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  const handleChange = () => {
    toggleDarkMode(theme === "light");
  };

  return (
    <>
      <button
        // style={{ opacity: 0.1 }}
        className={`${className} flex relative justify-center flex-col items-center cursor-pointer rounded-md overflow-hidden dark:hover:bg-[#252938] hover:bg-[#ccccd6] p-[20px]`}
        onClick={handleChange}
      >
        <motion.div
          className="absolute"
          initial={{ y: 0 }}
          animate={{
            y: theme === "light" ? -27 : 0,
          }}
        >
          <BiMoon className="text-text" />
        </motion.div>

        <motion.div
          className="absolute"
          initial={{ y: 0 }}
          animate={{
            y: theme === "light" ? 0 : 27,
          }}
        >
          <BiSun className="text-text" />
        </motion.div>
      </button>
      <div ref={ref} />
    </>
  );
}
