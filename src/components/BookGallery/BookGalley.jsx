import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const BookGalley = () => {
  const Gallery = useLoaderData();

  return (
    <section>
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
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={Gallery[6].image}
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={Gallery[8].image}
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/200x200/?6"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={Gallery[1].image}
            />
          </div>
        </section>
      </section>
    </section>
  );
};

export default BookGalley;
