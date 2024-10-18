"use client";
import BookMarks from "@/components/e-book-components/bookMarks";
import Content from "@/components/e-book-components/content";
import ToolBar from "@/components/e-book-components/toolBar";
import React, {useState} from "react";

function Page() {
  const [currentPage, setCurrentPage] = useState(0); // Pagination state
  const [pages, setPages] = useState([]); // Store paginated content
  const [wordContent, setWordContent] = useState("");

  const goToPage = (pageNum) => {
    if (pageNum >= 0 && pageNum < pages.length) {
      setCurrentPage(pageNum);
      setWordContent(pages[pageNum]);
    }
  };

  return (
    <div>
      <div className="text-fontPrimary">
        <ToolBar
          currentPage={currentPage}
          totalPages={pages.length}
          goToPage={goToPage}
        />
        <BookMarks />
        <Content
          currentPage={currentPage}
          setPages={setPages}
          setWordContent={setWordContent}
          wordContent={wordContent}
        />
      </div>
    </div>
  );
}

export default Page;
