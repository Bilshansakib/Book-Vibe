import { CiLocationOn } from "react-icons/ci";
import { BsFillPeopleFill } from "react-icons/bs";
import { PiNotebookLight } from "react-icons/pi";
import BookDetails from "./../BookDetails/BookDetails";
import { Link } from "react-router-dom";
const ReadCard = ({ book }) => {
  const {
    id,
    image,
    tags,
    bookName,
    author,
    category,
    rating,
    yearOfPublishing,
    publisher,
    totalPages,
  } = book;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          alt="Book"
          className="p-2 rounded-2xl object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold"> {bookName}</h2>
        <p className="font-semibold ">By : {author}</p>
        <p className="space-x-4 mt-4 flex items-center">
          <span className="font-bold"> Tag</span>
          <span className="text-[#23BE0A]  font-bold btn rounded-full">
            #{tags[0]}
          </span>
          <span className="text-primary font-bold btn rounded-full">
            #{tags[1]}
          </span>
          <span className="flex items-center gap-2">
            <span>
              <CiLocationOn className="text-primary size-6" />
            </span>
            <span className="text-primary font-semibold opacity-80">
              Year of Publishing: {yearOfPublishing}
            </span>
          </span>
        </p>
        <p className="mt-2 flex items-center gap-6 text-sm font-semibold opacity-80">
          <span className="flex items-center  gap-2">
            <span>
              <span>
                <BsFillPeopleFill />
              </span>
            </span>
            <span>
              <span>Publisher: {publisher}</span>
            </span>
          </span>
          <span className="flex  items-center gap-2">
            <span>
              <span>
                <PiNotebookLight />
              </span>
            </span>
            <span>
              <span>Page: {totalPages}</span>
            </span>
          </span>
        </p>
        <div className="divider"></div>
        <div className="card-actions">
          <button className="btn text-primary rounded-full">
            Category: {category}
          </button>
          <button className="btn text-[#FFAC33] rounded-full">
            Rating: {rating}
          </button>
          <Link to={`/book/${id}`}>
            <button className="btn bg-[#23BE0A] text-white rounded-full">
              View details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadCard;
