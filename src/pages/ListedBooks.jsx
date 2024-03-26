import { useState } from "react";
import { AiOutlineRead } from "react-icons/ai";
import { CiSaveUp2 } from "react-icons/ci";
import { Link } from "react-router-dom";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="container mx-auto">
      <div className=" text-center py-4 bg-slate-300 rounded-2xl">
        <p className="font-extrabold text-4xl ">Books</p>
      </div>
      <div className="text-center">
        <div className=" dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn btn-primary m-1">
            Sort By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <section>
        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800">
          <Link
            to=""
            onClick={() => setTabIndex(0)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 0 ? "border border-b-0" : "border-b"
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
            <AiOutlineRead />
            <span>Read Books</span>
          </Link>
          <Link
            to={`wishlist`}
            onClick={() => setTabIndex(1)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 1 ? "border border-b-0" : "border-b"
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
            <CiSaveUp2 />
            <span>Wishlist Books</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ListedBooks;
