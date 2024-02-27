/* eslint-disable react/prop-types */

import "../../assets/styles/cards.css";

function CardComponent({ data }) {
  console.log("DATA", data);
  return (
    <div className="flex flex-wrap justify-center">
      {data?.map((val, index) => (
        <div
          key={index}
          className="w-64 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4 flex flex-col"
        >
          <a href="#" className="flex justify-center px-5 mt-10">
            <img
              className="object-cover w-auto h-20 rounded-t-lg"
              src={val?.image}
              alt="product image"
            />
          </a>
          <div className="p-4 flex-grow">
            <a href="#">
              <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                {val?.category}
              </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-3">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                5.0
              </span>
            </div>
            <p className="text-sm font-mono text-gray-400 overflow-hidden">
              {val?.description &&
                val.description.split(" ").slice(0, 20).join(" ")}
            </p>
          </div>

          <div className="py-2 px-7">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                ${val?.price}
              </span>
              <a
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardComponent;
