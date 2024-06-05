"use client";

import React from "react";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

export default function PaginationButton() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const searchTerm = searchParams.get("searchTerm");
  const startIndex = searchParams.get("start") || 1;
  return (
    <div className="text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
      {startIndex >= 10 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
          prefetch={true}
        >
          <div className="flex flex-col items-center cursor-pointer hover:underline">
            <BsChevronLeft className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {startIndex <= 90 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${parseInt(startIndex) + 10}`}
          prefetch={true}
        >
          <div className="flex flex-col items-center cursor-pointer hover:underline">
            <BsChevronRight className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
}
