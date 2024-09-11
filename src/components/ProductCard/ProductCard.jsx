// src/components/ProductCard.jsx
import React from "react";
import { CiHeart } from "react-icons/ci";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4">
      <div className="relative">
        <img
          className="w-full h-72  object-cover object-center"
          src={product.image}
          alt={product.title}
        />
        <div className="absolute top-2 left-2 bg-white text-xs font-semibold px-2 py-1 rounded-full text-gray-800">
          Top rated
        </div>
        <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 19.121A5 5 0 1117.87 6.88l.707.707-.707.707-1.415 1.414L6.121 17.706 5.121 19.12z" />
          </svg> */}
          <CiHeart className="text-3xl" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-gray-800 text-xl font-semibold">{product.title}</h3>
        <p className="text-gray-600">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-red-500 text-lg font-semibold">
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
