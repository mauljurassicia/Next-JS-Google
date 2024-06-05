"use client";

import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function HomeSearch() {
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  const randomSearch = async () => {
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  };

  return (
    <>
      <form
        className="flex w-full mt-5 max-w-[90%] mx-auto border border-gray-200 px-5 item-center py-3 rounded-full focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
        onSubmit={handleSubmit}
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3 cursor-pointer" onClick={handleSubmit}/>
        <input
          type="text"
          className="flex-grow focus:outline-none"
          onChange={(e) => setInput(e.target.value)}
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8">
        <button
          className="bg-[#f8f9fa] rounded text-m text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow"
          onClick={handleSubmit}
        >
          Google Search
        </button>
        <button
          className="bg-[#f8f9fa] rounded text-m text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow disabled:opacity-80 disabled:shadow-none"
          onClick={randomSearch}
          disabled={randomSearchLoading}
        >
          {randomSearchLoading ? "Loading..." : "I'm Feeling Lucky"}
        </button>
      </div>
    </>
  );
}
