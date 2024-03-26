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
  // const { id, image, tags, bookName, author, category, rating } = book;
  // console.log(book);
  return (
    <div className="container mx-auto  grid grid-cols-1 lg:grid-cols-3 gap-4">
      <h2>{bookCards.length}</h2>
      {bookCards.map((book) => (
        // <Book key={book.id} book={book}></Book>
        <ReadCard key={book.id} book={book}></ReadCard>
      ))}
    </div>
  );
};

export default ReadBooks;
