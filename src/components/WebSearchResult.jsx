import Link from "next/link";
import React from "react";
import  htmlReactParser from "html-react-parser";
import PaginationButton from "./PaginationButton";

export default function WebSearchResult({ results }) {
    console.log(results.items);
  return (
    <div className="w-full mx-auto px-3 sm:pb-24 pb-40 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result) => (
        <div className="mb-8 max-w-xl" key={result.link}>
          <div className="flex group flex-col">
            <Link href={result.link}>{result.formattedUrl}</Link>
            <Link
              href={result.link}
              className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800"
            >
              {result.title}
            </Link>
          </div>
          <p className="text-gray-600">{htmlReactParser(result.htmlSnippet ?? "")}</p>
        </div>
      ))}
      <PaginationButton />
    </div>
  );
}
