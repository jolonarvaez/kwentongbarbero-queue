import Image from "next/image";
import React, { useState } from 'react';
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
      <img src="./logo-white.png" alt="logo" className="my-5"/>
      <div className="bg-white w-1/2 h-1/2 rounded-lg text-center align-middle">
        <div className="flex flex-col h-full justify-center items-center ">
          <div className="uppercase text-6xl my-4">
            Now Serving
          </div>
          <div className="font-bold text-9xl my-4">
          {count.toLocaleString('en-US', { minimumIntegerDigits: 3, useGrouping: false })}
          </div>
        </div>
      </div>
      <div className="my-5 grid grid-rows-1 grid-flow-col gap-2">
        <button className="text-white p-4 rounded-md border-solid border-2 w-40" onClick={() => handleDecrease(1)}>
        </button>
          {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right" style={{color: "#ffffff",}} /> */}
        <button className="text-white px-4 py-2 rounded-md border-solid border-2 w-40" onClick={() => handleIncrease(1)}>
        </button>
      </div>
    </div>
  );
}
