import { useEffect, useState } from "react";
import { AiOutlineRead } from "react-icons/ai";
import { CiSaveUp2 } from "react-icons/ci";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getBooks } from "../components/Utility";

const ListedBooks = () => {
  const books = useLoaderData();
  const [tabIndex, setTabIndex] = useState(0);

  const [sortBooks, setSortBooks] = useState([]);

  const [displayBooks, setDisplayBooks] = useState([]);

  const handleFilterMachine = (filter) => {
    if (filter === "all") {
      setDisplayBooks(sortBooks);
      console.log(sortBooks);
    } else if (filter === "Number of pages") {
      const pages = sortBooks.filter((book) => book.totalPages > 240);
      setDisplayBooks(pages);
    } else if (filter !== "Publish year") {
      const publishYear = sortBooks.filter(
        (book) => book.yearOfPublishing === "2003"
      );
      setDisplayBooks(publishYear);
    }
  };

  useEffect(() => {
    const storedSortBooks = getBooks();
    if (books.length > 0) {
      const newStoredSortBooks = [];
      for (const id of storedSortBooks) {
        const book = books.find((book) => book.id === id);
        if (book) {
          newStoredSortBooks.push(book);
        }
      }
      setSortBooks(newStoredSortBooks);
      setDisplayBooks(newStoredSortBooks);
      // console.log(newStoredSortBooks);
    }
  }, [books]);
  // const [sortIndex, setSortIndex] = useState(0);
  return (
    <div className="container mx-auto">
      <div className=" text-center py-4 bg-blue-100 rounded-2xl">
        <p className="font-extrabold text-4xl ">Books</p>
      </div>
      <div className="container mx-auto text-center mt-4">
        <div className=" dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn btn-primary m-1">
            Sort By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content font-semibold z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => handleFilterMachine("all")}>
              <a>Rating</a>
            </li>
            <li onClick={() => handleFilterMachine("Number of pages")}>
              <a>Number of pages</a>
            </li>
            <li onClick={() => handleFilterMachine("Publish year")}>
              <a>Publish year</a>
            </li>
          </ul>
        </div>
      </div>
      <section className="container mx-auto mt-4">
        <div className="flex items-center mx-4 overflow-x-auto overflow-y-hidden lg:justify-start sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800">
          <Link
            to=""
            onClick={() => setTabIndex(0)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 0 ? "border-2 border-b-0" : "border-b"
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
            <AiOutlineRead className="size-6" />
            <span className="font-semibold">Read Books</span>
          </Link>
          <Link
            to={`wishlist`}
            onClick={() => setTabIndex(1)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 1 ? "border border-b-0" : "border-b"
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
            <CiSaveUp2 className="size-6" />
            <span className="font-semibold">Wishlist Books</span>
          </Link>
        </div>
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default ListedBooks;
