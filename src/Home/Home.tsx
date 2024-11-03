import { useState } from "react";
export default function Home() {
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  return (
    <div className="min-h-screen flex justify-center items-center font-sans bg-[#1a1b26] relative overflow-hidden">
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
        <h1 className="text-4xl text-[#c0caf5] text-center">Hello Ruhan :3</h1>
        <img
          className="absolute left-1/2 top-1/2 transition-all duration-300    ease-in-out rounded-lg opacity-0 group-hover:opacity-100 group-hover:!-translate-y-[150px] group-hover:!translate-x-[-50%]"
          src="https://cdn.discordapp.com/emojis/1152696704303370371.gif?size=512&quality=lossless"
          style={{
            transform: `translate(${translate.x}px, ${translate.y}px)`,
          }}
        />
      </div>
    </div>
  );
}
