import { useEffect, useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";

const BookGalley = () => {
  const Gallery = useLoaderData();

  return (
    <section className="container mx-auto">
      <h2 className=" mx-auto mt-4 text-center text-3xl bg-blue-100 py-3 font-semibold">
        Book Gallery
      </h2>
      <Link
        to={"/"}
        rel="noopener noreferrer"
        className="px-8 py-3 font-semibold justify-center gap-4 flex items-center rounded"
      >
        <span>
          <MdOutlineKeyboardBackspace />
        </span>
      </Link>
      <section className="py-6 dark:bg-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src={Gallery[0].image}
            />
            <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src={Gallery[1].image}
            />
            <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src={Gallery[2].image}
            />
            <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src={Gallery[3].image}
            />
          </div>
        </div>
        <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
          <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
            <img
              src={Gallery[5].image}
              alt=""
              className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={Gallery[4].image}
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={Gallery[3].image}
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={Gallery[6].image}
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={Gallery[7].image}
            />
          </div>
        </section>
        <Link
          to={"/"}
          rel="noopener noreferrer"
          className="px-8 py-3 font-semibold justify-center gap-4 flex items-center rounded"
        >
          <span>
            <MdOutlineKeyboardBackspace />
          </span>
          <span>Back to homepage</span>
        </Link>
      </section>
    </section>
  );
};

export default BookGalley;
