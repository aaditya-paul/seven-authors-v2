"use client";

import {useSelector} from "react-redux";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "@firebase/firestore";
import {db} from "../../../../../../firebase"; // Make sure this path is correct
import ToolBar from "@/components/e-book-components/toolBar";
import BookMarks from "@/components/e-book-components/bookMarks";
import Content from "@/components/e-book-components/content";
import {fetchSingleBook} from "@/utils/fetchBooks";

const TIME_INTERVAL = 5000; // 30 seconds

function Page() {
  const [currentPage, setCurrentPage] = useState(); // Pagination state
  const [pages, setPages] = useState([]); // Store paginated content
  const [wordContent, setWordContent] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const bookId = usePathname().slice(15);
  const user = useSelector((state) => state.AdminRedux.user);

  useEffect(() => {
    if (!user) {
      return; // Do not proceed if user is undefined
    }

    async function getBookMarkFromDB() {
      try {
        const userRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.bookMark) {
            const bookMarkForCurrentBook = data.bookMark.find(
              (bookmark) => bookmark.bookId === bookId
            );

            if (bookMarkForCurrentBook) {
              setCurrentPage(bookMarkForCurrentBook.page); // Set the current page to the bookmarked page
            } else {
              setCurrentPage(0); // If no bookmark for this book, start at page 0
            }
          } else {
            setCurrentPage(0); // If no bookmarks at all, start at page 0
          }
        } else {
          console.error("No user data found!");
        }
      } catch (error) {
        console.error("Error getting bookmark data: ", error);
      }
    }

    getBookMarkFromDB();
  }, [bookId, user]);

  const setBookMark = async (pageNum) => {
    try {
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        const existingBookmarks = userData.bookMark || [];

        // Check if a bookmark for this book already exists
        const existingBookmark = existingBookmarks.find(
          (bookmark) => bookmark.bookId === bookId && bookmark.page === pageNum
        );

        if (existingBookmark) {
          // If already bookmarked, skip setting it
          return;
        }

        // If there's an existing bookmark for the book, remove it
        await updateDoc(userRef, {
          bookMark: arrayRemove(
            ...existingBookmarks.filter((b) => b.bookId === bookId)
          ),
        });

        // Add the new bookmark
        await updateDoc(userRef, {
          bookMark: arrayUnion({
            bookId: bookId,
            page: pageNum,
            totalPages: pages.length,
          }),
        });

        console.log("Bookmark set successfully!");
      } else {
        console.error("User data not found!");
      }
    } catch (error) {
      console.error("Error setting bookmark: ", error);
    }
  };

  // Function to go to a specific page
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

  useEffect(() => {
    let intervalId;

    // Set the bookmark automatically every 30 seconds
    if (currentPage !== undefined) {
      intervalId = setInterval(() => {
        setBookMark(currentPage);
      }, TIME_INTERVAL); // 30 seconds interval
    }

    return () => {
      clearInterval(intervalId); // Cleanup interval on unmount
    };
  }, [currentPage]); // Dependency on currentPage

  if (currentPage === undefined) return null;

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
