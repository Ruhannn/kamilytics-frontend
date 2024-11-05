import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";
import { cn } from "../utils/cn";

const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    src: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative block p-2 size-[300px] group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#343b58]/[.2] dark:bg-[#7aa2f7]/[.2] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card src={item.src}>
            <h4 className="mt-4 font-bold tracking-wide text-background dark:text-text">
              {item.title}
            </h4>
          </Card>
        </div>
      ))}
    </div>
  );
};

const Card = ({
  className,
  children,
  src,
}: {
  className?: string;
  children: React.ReactNode;
  src: string;
}) => {
  const [imgIsLoading, setImgIsLoading] = useState(true);
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden relative z-20",
        className
      )}
    >
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: imgIsLoading ? 0 : 1 }}
        transition={{ opacity: { delay: 0.5, duration: 0.4 } }}
        src={src}
        onLoad={() => setImgIsLoading(false)}
        loading="lazy"
        alt="background"
        className="absolute inset-0 object-cover w-full h-full rounded-2xl"
      />
      <div className="absolute inset-0 z-10 bg-black bg-opacity-30 rounded-2xl" />
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default HoverEffect;
