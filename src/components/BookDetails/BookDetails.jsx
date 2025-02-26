import { Link, useLoaderData, useParams } from "react-router-dom";
import { saveBooks, saveWishList } from "../Utility";

import toast from "react-hot-toast";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const Id = parseInt(id);
  const book = books.find((book) => book.id == Id);
  const {
    image,
    tags,
    bookName,
    author,
    category,
    review,
    totalPages,
    publisher,
    rating,
    yearOfPublishing,
  } = book;

  // const handleRead = (book) => {
  //   saveBooks(book);
  //   // console.log(book);
  // };
  const handleRead = () => {
    saveBooks(Id);
    toast.success("Marked as read successfully");
    // saveBooks(book);
    // console.log(book);
  };
  const handleWishList = (blog) => {
    // saveBooks(Id);
    saveWishList(blog);
    // console.log(blog);
    // toast.success("Add to wishlist successfully");
  };
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-md shadow-sm lg:flex-row">
        <div>
          <img
            src={image}
            alt=""
            className="h-90 rounded-xl dark:bg-gray-500 aspect-video"
          />
          <Link
            to={"/"}
            rel="noopener noreferrer"
            className="px-8 py-3 font-semibold pt-4 justify-center gap-4 flex items-center rounded"
          >
            <span>
              <MdOutlineKeyboardBackspace className="size-8" />
            </span>
            <span>Back to homepage</span>
          </Link>
        </div>
        <div className=" flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
          <h3 className=" text-3xl font-bold">{bookName}</h3>

          <p className="my-6 dark:text-gray-600 font-semibold text-lg">
            By : {author}
          </p>
          <div className="divider"></div>
          <p className="text-lg font-bold">{category}</p>
          <div className="divider"></div>
          <p>
            <span className="font-bold">Review: </span>
            {review}
          </p>
          <p className="space-x-4 mt-8">
            <span className="font-bold"> Tag</span>
            <span className="text-[#23BE0A]  font-bold btn rounded-full">
              #{tags[0]}
            </span>
            <span className="text-primary font-bold btn rounded-full">
              #{tags[1]}
            </span>
          </p>
          <div className="divider"></div>
          <div className="flex mt-2">
            <div>
              <p>
                <span className="mr-12 font-bold opacity-80">
                  Number of Pages:
                </span>
              </p>
              <p>
                <span className="mr-24 font-bold opacity-80">Publisher:</span>
              </p>
              <p>
                <span className="mr-12 font-bold opacity-80">
                  Year Of Publishing:
                </span>
              </p>
              <p>
                <span className="mr-12 font-bold opacity-80">Rating:</span>
              </p>
            </div>

            <div>
              <p className="font-bold">{totalPages}</p>
              <p className="font-bold">{publisher}</p>
              <p className="font-bold">{yearOfPublishing}</p>
              <p className="font-bold">{rating}</p>
            </div>
          </div>
          <div className="mt-6">
            <button
              onClick={() => handleRead(book)}
              className="btn mr-4 text-[#23BE0A]"
            >
              Read
            </button>
            <button
              onClick={() => handleWishList(book)}
              className="btn btn-primary hover:scale-105 overflow-hidden"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
