import { AiOutlineRead } from "react-icons/ai";
import { CiSaveUp2 } from "react-icons/ci";
const ListedBooks = () => {
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
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600"
          >
            <AiOutlineRead />
            <span>Read Books</span>
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900"
          >
            <CiSaveUp2 />
            <span>Wishlist Books</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ListedBooks;
