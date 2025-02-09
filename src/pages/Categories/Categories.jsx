import categoriesData from '../../pages/Categories/categoriesData';
import { useEffect, useState } from 'react';

export default function Categories() {

  useEffect(() => {
    document.title = 'BNC';
  }, []);

  return (
    <div className="container flex flex-wrap items-center">
      <h3 className="text-3xl font-medium mb-5 w-full">Our Categories</h3>
      {categoriesData.map((category) => (
        <div
          className="w-full lg:w-1/4 md:w-1/3 sm:w-1/2 p-3"
          key={category._id}
        >
          <div className="relative bg-white mx-auto hover:shadow-green-300 transition-shadow shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-lg sm:object-cover object-contain object-top w-full h-80"
              src={category.image}
              alt={category.name}
            />
            <div className="px-5 py-2">
              <h3 className="text-gray-900 overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-xl tracking-tight dark:text-white">
                {category.name}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
