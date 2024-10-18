"use client";

import React from "react";

export default function PaginationControls({
  currentPage,
  totalPages,
  goToPage,
}) {
  return (
    <div className="flex justify-between mt-4">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 0}
        className="px-4 py-2 bg-gray-300 rounded"
      >
        Previous
      </button>
      <span>
        Page {currentPage + 1} of {totalPages}
      </span>
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
        className="px-4 py-2 bg-gray-300 rounded"
      >
        Next
      </button>
    </div>
  );
}
