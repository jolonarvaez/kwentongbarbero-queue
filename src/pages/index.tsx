import Image from "next/image";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [count, setCount] = useState(0);

  const handleIncrease = (amount: number) => {
    setCount(Math.max(0, count + amount));
  };

  const handleDecrease = (amount: number) => {
    setCount(Math.max(0, count - amount));
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <img
        src="./logo-white.png"
        alt="logo"
        className="my-5 w-4/6 md:w-1/2 lg:w-2/6"
      />
      <div className="bg-white w-3/4 lg:w-3/5 h-1/2 rounded-lg text-center align-middle">
        <div className="flex flex-col h-full justify-center items-center">
          <div className="uppercase text-7xl my-4">Now Serving</div>
          <div className="font-bold text-9xl my-4">
            {count.toLocaleString("en-US", {
              minimumIntegerDigits: 3,
              useGrouping: false,
            })}
          </div>
        </div>
      </div>
      <div className="my-5 grid grid-rows-1 grid-flow-col gap-6 text-xl">
        <button
          className="text-white p-4 rounded-md border-solid border-2"
          onClick={() => handleDecrease(1)}
        >
          <AiOutlineArrowLeft />
        </button>
        <button
          className="text-white p-4 rounded-md border-solid border-2"
          onClick={() => handleIncrease(1)}
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
}
