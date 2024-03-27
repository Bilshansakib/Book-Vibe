import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBooks } from "../Utility";
import Book from "../Book/Book";
import ReadCard from "../ReadCard/ReadCard";
import toast from "react-hot-toast";

const ReadBooks = () => {
  const books = useLoaderData();

  // const [books, setBooks] = useState([]);
  const [bookCards, setBookCards] = useState([]);

  useEffect(() => {
    const storedBooks = getBooks();
    if (books.length > 0) {
      const bookStored = books.filter((book) => storedBooks.includes(book.id));
      // console.log(bookStored);
      setBookCards(bookStored);
    }

    // setBooks(storedBooks);
  }, [books]);
  return (
    <>
      <div className="container mx-auto mt-4 space-y-4">
        {bookCards.map((book) => (
          // <Book key={book.id} book={book}></Book>
          <ReadCard key={book.id} book={book}></ReadCard>
        ))}
      </div>
    </>
  );
};

export default ReadBooks;
