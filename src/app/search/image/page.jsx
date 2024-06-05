import ImageSearchResult from "@/components/ImageSearchResult";
import Link from "next/link";
import React from "react";

const googlesearchapikey = process.env.GOOGLE_SEARCH_API_KEY;
const cx = process.env.CONTEXT_KEY;

export default async function page({ searchParams }) {
  const startIndex = searchParams.start || 1;
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${googlesearchapikey}&cx=${cx}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
  );
  if (!response.ok) throw new Error("Failed to fetch data");
  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">
          No result found for {searchParams.searchTerm}
        </h1>
        <p className="text-lg">
          Try searching for another keyword
          <Link href={"/"} className="text-blue-500 border-b border-blue-500 active:text-blue-600 active:border-blue-600 active:border-b-2 active:font-semibold"> or go back to homepage</Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      {results &&
        <ImageSearchResult results={data}/>}
    </div>
  );
}
