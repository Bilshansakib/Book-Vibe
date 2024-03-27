import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 mx-auto mt-8 py-4">
      <div className="container flex flex-col justify-center bg-slate-300 rounded-3xl p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Books <span className="dark:text-violet-600">to freshen </span>up
            your bookshelf
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Books are a cornerstone of human civilization, serving as vessels
            <br className="hidden md:inline lg:hidden" />
            _of knowledge, entertainment, and cultural heritage.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              to={`/ListedBooks`}
              rel="noopener noreferrer"
              className="px-8 btn btn-primary py-3 text-lg font-semibold border rounded dark:border-gray-800"
            >
              View The List
            </Link>
            <Link
              to={`/ListedBooks`}
              rel="noopener noreferrer"
              className="px-8 btn btn-secondary py-3 text-lg font-semibold border rounded dark:border-gray-800"
            >
              Gallery
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="https://i.ibb.co/2M7htJL/elaine-howlin-e-NMMw7ih-J2-Y-unsplash.jpg"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
