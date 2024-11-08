import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hook/useOutsideClick";
import { songData } from "../data";

export default function About() {
  const [active, setActive] = useState<
    (typeof songData)[number] | boolean | null
  >(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
        setIsPlaying(false);
      }
    }

    // if (active && typeof active === "object") {
    //   document.body.style.overflow = "hidden";
    // } else {
    //   document.body.style.overflow = "auto";
    // }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => {
    setActive(null);
    setIsPlaying(false);
  });
  const togglePlayPause = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4 text-text">
      <h1 className="text-6xl">My frv songs</h1>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 w-full h-full bg-black/40"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full top-2 right-2 lg:hidden"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-background sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.image}
                  alt={active.title}
                  className="object-cover object-top w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg"
                />
              </motion.div>

              <div>
                <div className="flex items-start justify-between p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-text"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`artist-${active.artist}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.artist}
                    </motion.p>
                  </div>
                  <motion.button
                    onClick={togglePlayPause}
                    className="px-4 py-3 text-sm font-bold text-white bg-green-500 rounded-full cursor-pointer select-none"
                    layoutId={`button-${active.title}-${id}`}
                  >
                    {isPlaying ? "pause" : "play"}
                  </motion.button>
                  <audio
                    ref={audioRef}
                    onEnded={() => setIsPlaying(false)}
                    src={active.src}
                  />
                </div>
                <div className="relative px-4 pt-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="w-full max-w-2xl gap-4 mx-auto">
        {songData.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="flex flex-col items-center justify-between p-4 cursor-pointer md:flex-row hover:bg-secondary rounded-xl"
          >
            <div className="flex flex-col gap-4 md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.image}
                  alt={card.title}
                  className="object-cover object-top w-40 h-40 rounded-lg md:h-14 md:w-14"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-center text-text md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`artist-${card.artist}-${id}`}
                  className="text-center text-neutral-600 dark:text-neutral-400 md:text-left"
                >
                  {card.artist}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 mt-4 text-sm font-bold text-black bg-gray-100 rounded-full hover:bg-green-500 hover:text-white md:mt-0"
            >
              more
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </main>
  );
}

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
