import { useState } from "react";
import "./App.css";
import data from "../data.json";
import SummaryBox from "./components/SummaryBox";

function App() {
  const colorMap = {
    Reaction: { bg: "bg-red-50", text: "text-red-600" },
    Memory:   { bg: "bg-yellow-50", text: "text-yellow-500" },
    Verbal:   { bg: "bg-emerald-50", text: "text-emerald-600" },
    Visual:   { bg: "bg-indigo-50", text: "text-indigo-700" },
  };

  return (
    <>
      <main className="sm:min-h-screen h-full max-h-full flex items-center justify-center flex-col sm:flex-row bg-sky-50">
        <div className="bg-white h-full max-h-full flex flex-col sm:flex-row items-center justify-center sm:shadow-2xl w-full sm:flex sm:w-[700px] sm:rounded-4xl overflow-hidden">
          <section className="w-full sm:h-[460px] flex items-center justify-between h-full flex-col bg-gradient-to-b from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)] p-10 rounded-br-4xl rounded-bl-4xl sm:rounded-4xl overflow-hidden gap-8">
          <h1 className="text-xl text-gray-200">Your Result</h1>

          <div
            style={{ borderRadius: "50%" }}
            className="flex flex-col w-36 h-36 items-center justify-center p-10 bg-[#4B2EB8]"
            aria-label="Score 76 out of 100"
          >
            <h2 className="text-white text-6xl font-bold leading-none">76</h2>
            <h4 className="text-white opacity-95 text-md mt-1">of 100</h4>
          </div>

          <h2 className="text-white text-2xl font-semibold">Great</h2>
          <p className="text-indigo-50 font-normal text-center max-w-[30ch] sm:max-w-[26ch]">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </section>

        <section className="bg-white flex flex-col h-full max-h-full w-full sm:h-[460px] max-w-md gap-4 p-8">
          <h1 className="w-full text-xl text-black font-bold">Summary</h1>

          {data.map((item) => (
            <SummaryBox
              key={item.category}
              icon={item.icon}
              category={item.category}
              score={item.score}
              color={colorMap[item.category]}
            />
          ))}

          <button
            type="button"
            className="bg-blue-950 text-white text-2xl p-3 rounded-full mt-2 font-semibold cursor-pointer hover:bg-[#5C50FF]"
          >
            Continue
          </button>
        </section>
        </div>
      </main>
    </>
  );
}

export default App;