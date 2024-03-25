import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [dataLength, setDataLength] = useState(6);
  useEffect(() => {
    fetch("Books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl font-extrabold">Books : {books.length}</h2>
        <div className="container mx-auto  grid grid-cols-1 lg:grid-cols-3 gap-4">
          {books.slice(0, dataLength).map((book) => (
            <Book key={books.id} book={book}></Book>
          ))}
        </div>
        <div className={dataLength === books.length ? "hidden " : "mt-6"}>
          <button
            className="btn btn-primary"
            onClick={() => setDataLength(books.length)}
          >
            See more books
          </button>
        </div>
      </div>
    </div>
  );
};

export default Books;
