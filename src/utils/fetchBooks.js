import {collection, doc, getDoc, getDocs} from "firebase/firestore";
import {db} from "../../firebase";

export const fetchBooks = async () => {
  try {
    const booksCollection = collection(db, "books");
    const bookSnapshot = await getDocs(booksCollection);
    const bookList = bookSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return bookList; // Return the list of books
  } catch (err) {
    throw new Error("Failed to fetch books: " + err.message);
  }
};
export const fetchSingleBook = async (id) => {
  try {
    const booksCollection = doc(db, "books", id);
    const bookSnapshot = await getDoc(booksCollection);
    const bookList = bookSnapshot.data();
    if (bookSnapshot.exists()) {
      return bookList; // Return the list of books
    } else {
      return -1;
    }
  } catch (err) {
    throw new Error("Failed to fetch books: " + err.message);
  }
};
