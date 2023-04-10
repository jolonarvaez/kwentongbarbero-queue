import Image from "next/image";
import React, { useState, useRef } from "react";
import { Inter } from "next/font/google";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [queue, setQueue] = useState<number[]>([]);
  const [count, setCount] = useState(1);
  const [currNum, setNum] = useState(0);

  const enqueue = () => {
    setQueue([...queue, count]);
    setCount(count + 1);
  };

  const dequeue = () => {
    if (queue.length > 0) {
      const newQueue = [...queue];
      setNum(queue[0]);
      newQueue.shift();
      setQueue(newQueue);
    }
  };

  const renderList = queue.map((item, index) => (
    <div className="lg:w-1/2 w-1/5" key={index}>
      {item.toLocaleString("en-US", {
        minimumIntegerDigits: 3,
        useGrouping: false,
      })}
    </div>
  ));

  return (
    <div className="h-screen flex flex-col items-center">
      <img
        src="./logo-white.png"
        alt="logo"
        className="my-5 w-4/6 md:w-1/2 lg:w-2/6"
      />
      <div className="w-5/6 h-1/2 flex lg:space-x-6 lg:flex-row flex-col">
        <div className="lg:w-3/4 h-full container justify-center">
          <div className="bg-white w-full h-max lg:h-full rounded-lg text-center align-middle">
            <div className="flex flex-col h-full justify-center items-center">
              <div className="uppercase text-5xl lg:text-7xl my-4">
                Now Serving
              </div>
              <div className="font-bold text-9xl my-4">
                {currNum.toLocaleString("en-US", {
                  minimumIntegerDigits: 3,
                  useGrouping: false,
                })}
              </div>
            </div>
          </div>
          <div className="my-5 flex justify-center text-xl">
            <button
              className="text-white p-4 rounded-md border-solid border-2"
              onClick={() => dequeue()}
            >
              Next
            </button>
          </div>
        </div>
        <div className="lg:w-1/4 w-full min-h-10">
          <div className="bg-white container h-full rounded-lg">
            <div className="text-center uppercase font-medium py-5 text-2xl lg:text-xl">
              Customers in Queue
              <div className="container px-2 flex flex-wrap font-bold text-4xl lg:text-6xl mt-4">
                {renderList}
              </div>
            </div>
          </div>
          <div className="my-5 flex justify-center text-xl">
            <button
              className="text-white p-4 rounded-md border-solid border-2 "
              onClick={() => enqueue()}
            >
              Add to Queue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
