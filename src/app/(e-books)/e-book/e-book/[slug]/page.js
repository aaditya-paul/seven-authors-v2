"use client";
import BookMarks from "@/components/e-book-components/bookMarks";
import Content from "@/components/e-book-components/content";
import ToolBar from "@/components/e-book-components/toolBar";
import {usePathname} from "next/navigation";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

function Page() {
  const [currentPage, setCurrentPage] = useState(0); // Pagination state
  const [pages, setPages] = useState([]); // Store paginated content
  const [wordContent, setWordContent] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const bookId = usePathname().slice(15);
  const user = useSelector((state) => state.AdminRedux.user);

  const goToPage = (pageNum) => {
    if (user.booksBought && user.booksBought.includes(bookId)) {
      if (pageNum >= 0 && pageNum < pages.length) {
        setCurrentPage(pageNum);
        setWordContent(pages[pageNum]);
      }
    } else {
      if (pageNum >= 0 && pageNum < 5) {
        setCurrentPage(pageNum);
        setWordContent(pages[pageNum]);
      }
      if (pageNum === 5) {
        alert("You need to buy the book to get full access");
      }
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
        <BookMarks title={bookTitle} />
        <Content
          currentPage={currentPage}
          setPages={setPages}
          setWordContent={setWordContent}
          wordContent={wordContent}
          setBookTitle={setBookTitle}
        />
      </div>
    </div>
  );
}

export default Page;
