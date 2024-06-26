'use client'

import { useState } from "react";

const Title = () => {  
  return <h1 className="text-black text-4xl">What is your Age ?</h1>
}

interface buttonsProps {
  handleClick1: () => void;
  handleClick2: () => void;
}

const Buttons = ({ handleClick1, handleClick2 }: buttonsProps) => {
  return (
    <div className="flex justify-around w-full">
      <button 
        className="w-1/5 h-11 rounded-full border border-black bg-black text-white" 
        onClick={handleClick1}
      >
        -
      </button>
      <button 
        className="w-1/5 h-11 rounded-full border border-black bg-black text-white" 
        onClick={handleClick2}
      >
        +
      </button>
    </div>
  );
}

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col items-center justify-center bg-gray-100 gap-4 p-24 rounded-lg">
        <Title />
        <p className="text-red-500 text-2xl font-semibold">{count}</p>
        <Buttons handleClick1={() => setCount(count - 1)} handleClick2={() => setCount(count + 1)} />
      </div>
    </div>
  );
}
