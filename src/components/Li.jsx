import React, { useContext } from "react";
import DataContext from "../DataContext";

const Li = ({ item, index }) => {
  const { quantities, increaseQuantity, decreaseQuantity } =
    useContext(DataContext);

  const handleIncrease = () => {
    if (quantities[index] < item.stock) {
      increaseQuantity(index);
    }
  };

  const handleDecrease = () => {
    decreaseQuantity(index);
  };

  return (
    <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
      <div className="shrink-0">
        <img
          className="h-24 w-24 max-w-full rounded-lg object-cover"
          src={item.thumbnail}
          alt={item.title}
        />
      </div>

      <div className="relative flex flex-1 flex-col justify-between">
        <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
          <div className="pr-8 sm:pr-5">
            <p className="text-base font-semibold text-gray-900">
              {item.title}
            </p>
            <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
              {item.description}
            </p>

            <div className="flex items-center">
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="ms-2 text-sm font-bold text-gray-900">
                {item.rating}
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
            <div className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
              ${item.price}
              <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                {item.discountPercentage}% Off applied
              </p>
            </div>

            <div className="sm:order-1">
              <div className="mx-auto flex h-8 items-stretch text-gray-600">
                <button
                  onClick={handleDecrease}
                  className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                >
                  -
                </button>
                <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                  {quantities[index]}
                </div>
                <button
                  onClick={handleIncrease}
                  disabled={quantities[index] >= item.stock}
                  className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                >
                  {quantities[index] >= item.stock ? "" : "+"}
                </button>
              </div>
              ({item.stock}) In stock
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto"></div>
      </div>
    </li>
  );
};

export default Li;
