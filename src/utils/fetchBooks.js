import {collection, getDocs} from "firebase/firestore";
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
