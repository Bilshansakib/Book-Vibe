import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBooks } from "../Utility";
import Book from "../Book/Book";
import ReadCard from "../ReadCard/ReadCard";

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
  }, []);
  return (
    <>
      <div className="container mx-auto  gap-4">
        {bookCards.map((book) => (
          // <Book key={book.id} book={book}></Book>
          <ReadCard key={book.id} book={book}></ReadCard>
        ))}
      </div>
    </>
  );
};

export default ReadBooks;
