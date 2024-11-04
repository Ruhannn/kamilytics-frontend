import { useState } from "react";
import HoverEffect from "../components/hoverEffect";
import PlaceholdersAndVanishInput from "../components/placeholders-and-vanish-input";
import { sendMessage } from "../utils/sendMessage";
import { ayakaData } from "../data";
// import { getAyakaImg } from "../utils/getAyakaImg";
// import { useQuery } from "react-query";
// import ReactConfetti from "react-confetti";
// import useWindowSize from "react-use/lib/useWindowSize";
import { motion } from "framer-motion";

const placeholders = ["ask me a question"];

export default function Ayaka() {
  const [value, setValue] = useState<string>("");
  // const [gift, setGift] = useState<boolean>(false);
  // const [showConfetti, setShowConfetti] = useState<boolean>(false);
  // const { width, height } = useWindowSize();
  // const { data, isLoading } = useQuery<string, Error>({
  //   queryKey: ["ayaka"],
  //   queryFn: getAyakaImg,
  //   enabled: gift,
  //   refetchOnWindowFocus: false,
  // });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage(value);
    // setTimeout(() => {
    //   setGift(true);
    // }, 1000);
    // setTimeout(() => setShowConfetti(true), 10000);
  };

  return (
    // <div className="relative overflow-hidden">
    //   {gift && (
    //     <ReactConfetti
    //       hidden={showConfetti}
    //       width={width}
    //       height={height}
    //       className="absolute top-0 left-0"
    //     />
    //   )}
    //   {!gift ? (
    //     <motion.div
    //       className="flex flex-col items-center justify-center max-w-5xl min-h-screen mx-auto"
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       exit={{ opacity: 0, y: -20 }}
    //       transition={{ duration: 0.5 }}
    //     >
    //       <h2 className="mb-10 text-xl text-center text-text sm:mb-20 sm:text-5xl">
    //         Ask me a question and get a gift
    //       </h2>
    //       <PlaceholdersAndVanishInput
    //         placeholders={placeholders}
    //         onChange={(e) => setValue(e.target.value)}
    //         onSubmit={onSubmit}
    //       />
    //       <HoverEffect items={ayakaData} />
    //     </motion.div>
    //   ) : (
    //     <motion.div
    //       className="flex flex-col items-center justify-center max-w-5xl min-h-screen mx-auto"
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       exit={{ opacity: 0, y: -20 }}
    //       transition={{ duration: 0.5 }}
    //     >
    //       {isLoading ? (
    //         "Loading..."
    //       ) : (
    //         <div>
    //           <h1 className="text-center">Here is your gift: an image of Ayaka</h1>
    //           <img
    //             src={data}
    //             alt="Kamisato Ayaka"
    //             className="mt-4 w-[300px] h-full rounded-lg"
    //           />
    //         </div>
    //       )}
    //     </motion.div>
    //   )}
    // </div>
    <motion.div
      className="flex flex-col items-center justify-center max-w-5xl min-h-screen mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="mb-10 text-xl text-center text-text sm:mb-20 sm:text-5xl">
        Ask me a question and get a gift
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={(e) => setValue(e.target.value)}
        onSubmit={onSubmit}
      />
      <HoverEffect items={ayakaData} />
    </motion.div>
  );
}
