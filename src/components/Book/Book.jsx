import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
  const { id, image, tags, bookName, author, category, rating } = book;

  return (
    <Link to={`/book/${id}`}>
      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div>
          <img
            src={image}
            alt={bookName}
            className=" rounded-xl object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
          />
          <div className="items-start text-left space-y-2 pt-1">
            <div className="flex ">
              <span className=" mr-4 text-primary font-bold btn rounded-full">
                #{tags[0]}
              </span>
              <span className="btn font-bold btn-primary rounded-full">
                #{tags[1]}
              </span>
            </div>
            <h2 className="mb-1 text-2xl font-semibold">{bookName}</h2>
            <p className="text-sm opacity-80 font-semibold dark:text-gray-600">
              By : {author}
            </p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex flex-wrap justify-between">
          <div className="space-x-2">
            <p className="font-semibold  opacity-80">{category}</p>
          </div>
          <div className="flex items-center space-x-2 text-sm dark:text-gray-600">
            <p className="font-semibold  opacity-80">{rating}</p>
            <FaRegStar />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
