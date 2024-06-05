"use client";

import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function SearchBox() {
  const [term, setTerm] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName  = usePathname();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    console.log(term);
    router.push(`${pathName}?searchTerm=${term}`);
  };

  useEffect(() => {
    setTerm(searchParams.get("searchTerm"));
  }, []);


  return (
    <form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 items-center justify-between flex-grow max-w-3xl ml-10 mr-5" onSubmit={handleSubmit}>
      <input type="text" className="w-full focus-within:outline-none" value={term} onChange={(e) => setTerm(e.target.value)}/>
      <RxCross2 className="text-2xl text-gray-500 cursor-pointer sm:mr-2" onClick={() => setTerm("")}/>
      <BsFillMicFill className="hidden sm:inline-flex  text-4xl text-blue-500 cursor-pointer border-l-2 border-gray-300 mr-3 pl-4" />
      <AiOutlineSearch className="hidden text-2xl sm:inline-flex text-blue-500 cursor-pointer" onClick={handleSubmit}/>
    </form>
  );
}
