import { useState } from "react";
import FlipWords from "../components/flipWords";
export default function Home() {
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden font-sans bg-background">
      <div
        className="group w-[400px] cursor-pointer"
        onMouseLeave={() =>
          setTranslate((p) => ({
            ...p,
            x: Math.random() * 1400 - 700,
            y: Math.random() * 1400 - 700,
          }))
        }
      >
        <div className="flex items-center justify-center text-4xl text-center text-text">
          <div className="flex gap-2">
            <span>Hello </span>
            <span>I</span>
            <span>am,</span>
          </div>
          <div className="inline-block text-center">
            <FlipWords
              words={["Ruhan :C", "KamiRu :D", "Kami :O", "Gummy :3"]}
            />
          </div>
        </div>

        <img
          className="absolute left-1/2 top-1/2 transition-all duration-300 ease-in-out rounded-lg opacity-0 group-hover:opacity-100 group-hover:!-translate-y-[150px] group-hover:!translate-x-[-50%]"
          src="https://cdn.discordapp.com/emojis/1152696704303370371.gif?size=512&quality=lossless"
          style={{
            transform: `translate(${translate.x}px, ${translate.y}px)`,
          }}
        />
      </div>
    </div>
  );
}
