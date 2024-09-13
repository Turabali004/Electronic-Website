import React from "react";
import { Hero, PrimaryBtn, ProductCard, Footer, Header } from "../components";
import FeatureImg from "/public/images/featureImg.png";
// import IphomeImg from "/public/images/productbyimg.png";
import { AiFillStar } from "react-icons/ai";
import airpodsImage from "/public/images/awesomeairpods.png";
import watchImage from "/public/images/smartWatches.png";
import { FiTag } from "react-icons/fi";
import {
  FiUsers,
  FiShoppingCart,
  FiImage,
  FiMessageCircle,
} from "react-icons/fi";

import { Link } from "react-router-dom";

function Home() {
  const products = [
    { name: "Iphone", image: "/public/images/newarrival2.png" },
    { name: "Speaker", image: "/public/images/featuredSpeaker.png" },
    { name: "Tablet", image: "/public/images/toprated8.png" },
    { name: "Laptop", image: "/public/images/toprated4.png" },
    { name: "Headphone", image: "/public/images/featureImg.png" },
  ];

  const productsDetail = [
    {
      id: 1,
      image: "/public/images/authImg.png",
      title: "LED 4k smart TV expo White/Gray/Black",
      description: "",
      price: 499,
    },
    {
      id: 2,
      image: "/public/images/toprated2.png",
      title: "GM-2345 closed back wireless Headphones",
      description: "",
      price: 99,
    },
    {
      id: 3,
      image: "/public/images/featureImg.png",
      title: "GM-2345 clossed back wireless Headphones",
      description: "",
      price: 99,
    },
    {
      id: 4,
      image: "/public/images/toprated4.png",
      title: "Laptop 4k smart TV expoWhite/Gray/Black",
      description: "",
      price: 99,
    },
    {
      id: 1,
      image: "/public/images/authImg.png",
      title: "LED 4k smart TV expo White/Gray/Black",
      description: "",
      price: 499,
    },
    {
      id: 2,
      image: "/public/images/toprated2.png",
      title: "GM-2345 closed back wireless Headphones",
      description: "",
      price: 99,
    },
    {
      id: 3,
      image: "/public/images/featureImg.png",
      title: "GM-2345 clossed back wireless Headphones",
      description: "",
      price: 99,
    },
    {
      id: 4,
      image: "/public/images/toprated4.png",
      title: "Laptop 4k smart TV expoWhite/Gray/Black",
      description: "",
      price: 99,
    },
    // Add more products as needed
  ];

  const productsDetails = [
    {
      id: 1,
      name: "James smith",
      price: "49$",
      imageUrl: "/public/images/newArrival1.png",
      rating: 5.0,
    },
    {
      id: 2,
      name: "John lara",
      price: "55$",
      imageUrl: "/public/images/newArrival2.png",
      rating: 5.0,
    },
    {
      id: 3,
      name: "Miss zara",
      price: "39$",
      imageUrl: "/public/images/newArrival3.png",
      rating: 4.3,
    },
    {
      id: 4,
      name: "Lauren",
      price: "69$",
      imageUrl: "/public/images/newArrival4.png",
      rating: 5.0,
    },
  ];

  return (
    <div>
      <Header />
      <Hero />

      {/* Features-Section */}
      <div className="max-w-screen-2xl py-10 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">
          Feature's
        </h2>

        <div className=" bg-primary py-10 px-6 md:py-14 rounded-lg">
          <div className="flex flex-col md:flex-row px-14 gap-9  md:items-start">
            {/* Image Section */}
            <div className="relative flex justify-center items-center w-full md:w-1/2 lg:w-3/6 mb-8 md:mb-0">
              <img
                src={FeatureImg}
                alt="Headphones"
                className="object-cover w-2/3 md:w-1/2"
              />
              <div className="absolute inset-0 flex flex-wrap gap-1 md:gap-2 opacity-20 p-2 md:p-4">
                {Array.from({ length: 20 }).map((_, index) => (
                  <div
                    key={index}
                    className="w-[20%] h-[20%] bg-[#233142] flex items-center justify-center font-bold text-white text-[8px] md:text-sm"
                  >
                    HEADPHONES
                  </div>
                ))}
              </div>
            </div>

            {/* Text Section */}
            <div className="flex flex-col justify-center w-full md:w-2/3 lg:w-3/12 px-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Amazing feature
              </h3>
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h4 className="text-lg md:text-xl font-semibold">
                    Touch Controls
                  </h4>
                  <p className="text-gray-700 text-sm md:text-base">
                    Some headphones have touch-sensitive surfaces for
                    controlling playback.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold">
                    Sound Quality
                  </h4>
                  <p className="text-gray-700 text-sm md:text-base">
                    This includes considerations like bass response, clarity,
                    and overall audio fidelity.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold">
                    Microphone
                  </h4>
                  <p className="text-gray-700 text-sm md:text-base">
                    Built-in microphones enable hands-free calling and voice
                    commands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Catogary-Section */}
      <div className="max-w-screen-2xl mx-auto py-10 px-4">
        {/* Heading Section */}
        <h2 className="text-center text-3xl md:text-4xl text-secondary font-semibold mb-2">
          Category
        </h2>
        <h3 className="text-center text-2xl md:text-4xl font-bold mb-12">
          Can we help you pick a headphone
        </h3>

        {/* Products Row */}
        <div className="flex flex-wrap justify-center md:justify-evenly mb-16 mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center space-y-2 w-1/2 sm:w-1/3 md:w-[15%] lg:w-[13%] h-60 md:h-72 px-2 py-4 rounded-md shadow-lg hover:shadow-xl transition mb-6 md:mb-0"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-40 md:w-64 h-40 md:h-52 object-contain"
              />
              <span className="font-bold text-lg md:text-2xl text-center">
                {product.name}
              </span>
            </div>
          ))}
        </div>

        {/* Offers Section */}
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Offer 1 */}
          <div className="w-full lg:w-[48%] flex justify-center items-center bg-white rounded-md shadow-2xl p-6 mb-6 lg:mb-0 lg:mr-4 hover:shadow-xl transition">
            <img
              src="/public/images/toprated7.png"
              alt="Camera"
              className="w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 object-contain"
              style={{ transform: "rotate(-70deg)" }}
            />
            <div className="ml-6 text-center lg:text-left">
              <span className="block font-extrabold text-2xl md:text-3xl mb-2">
                25% off
              </span>
              <h4 className="text-lg md:text-xl mb-4">
                Catch hottest Deals in Cameras category
              </h4>
              <PrimaryBtn />
            </div>
          </div>

          {/* Offer 2 */}
          <div className="w-full lg:w-[48%] flex justify-center items-center bg-white rounded-md shadow-2xl p-6 hover:shadow-xl transition">
            <img
              src="/public/images/toprated8.png"
              alt="Tablet and Phone"
              className="w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 object-contain"
            />
            <div className="ml-6 text-center lg:text-left">
              <span className="block font-extrabold text-2xl md:text-3xl mb-2">
                25% off
              </span>
              <h4 className="text-lg md:text-xl font-bold mb-4">
                Tablets smartphone and more
              </h4>
              <span className="block text-secondary font-bold text-xl md:text-2xl">
                $799
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center my-8">
          Top rated product
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsDetail.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Shop Product */}
      <div className="w-screen px-6 sm:px-10 md:px-20 my-10 md:my-20 relative">
        {/* Section Title */}
        <h1 className="text-2xl md:text-4xl font-bold text-center">
          Shop Product By
        </h1>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row items-center bg-primary rounded-2xl mx-auto mt-10 md:mt-14 md:w-10/12">
          {/* Image Section */}
          <div className="relative w-full md:w-1/2 md:flex-shrink-0 md:top-16">
            <img
              src={IphomeImg}
              alt="Product"
              className="w-full h-auto md:w-11/12 object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="mt-6 md:mt-0 w-full md:w-1/2 md:max-w-md px-6 py-8 md:px-0 md:ml-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Define yourself, be different
            </h2>
            <p className="text-gray-600 mb-6">
              These have large ear cups that encompass the ears, providing good
              sound isolation and often better sound quality.
            </p>
            <button className="bg-[#EC3D2F] text-white py-2 px-6 rounded-lg hover:bg-red-600 transition">
              Shop now &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* New-Arrival */}
      <section className="py-10 px-11 overflow-x-hidden">
        <div className="mx-auto">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-center mb-8">New arrival</h2>
            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              <span className="inline-block w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="inline-block w-3 h-3 bg-pink-300 rounded-full"></span>
              <span className="inline-block w-3 h-3 bg-pink-200 rounded-full"></span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {productsDetails.map((product) => (
              <div
                key={product.id}
                className="bg-white p-6 rounded-lg shadow-2xl flex flex-col items-center justify-between hover:shadow-xl transition-shadow"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-32 h-32 object-contain mb-4"
                />
                <div className="text-left text-xl">
                  <h3 className="text-xl font-semibold text-black mb-2 flex items-center justify-between">
                    {product.name}
                    <div className="flex justify-center items-center">
                      <AiFillStar className="text-yellow-500 " />
                      <span className="ml-1 text-gray-700 font-semibold">
                        {product.rating}
                      </span>
                    </div>
                  </h3>
                  <p className="text-gray-500">
                    Headphones come with a variety of features.
                  </p>
                </div>
                <div className=" flex items-center justify-between mt-4 w-full">
                  <span className="text-red-500 text-2xl font-bold">
                    {product.price}
                  </span>
                  <button className="mt-4 py-2 px-6 bg-transparent border border-red-500 text-red-500 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition">
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-auto mx-auto px-6 sm:px-8 py-8">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
          Top Rated Products
        </h1>

        {/* Product Cards Container */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Product Card */}
          <div className="bg-primary rounded-2xl overflow-hidden shadow-lg py-4 px-6 flex flex-col sm:flex-row items-center w-full md:w-2/3">
            <img
              className="w-full sm:w-80 h-64 sm:h-96 object-contain mb-4 sm:mb-0"
              src={airpodsImage}
              alt="Awesome Airpods"
            />

            <div className="flex flex-col justify-center items-start sm:ml-6 w-full sm:w-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                Awesome Airpods
              </h2>
              <p className="text-gray-600 mt-2">
                These have large ear cups that encompass the ears, providing
                good sound isolation and often better sound quality.
              </p>
              <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 flex items-center space-x-2">
                <span>Shop now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1.707-9.293a1 1 0 00-1.414-1.414L9 10.586V7a1 1 0 00-2 0v4a1 1 0 001 1h4a1 1 0 100-2h-3.586l1.293-1.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Product Card */}
          <div className="bg-primary rounded-2xl overflow-hidden shadow-lg px-6 py-4 w-full md:w-1/3 flex flex-col md:flex-row items-center">
            <div className="flex flex-col justify-between w-full md:w-auto">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
                Smart Watches
              </h2>
              <PrimaryBtn />
            </div>
            <img
              className="w-full md:w-64 h-64 object-contain mt-4 md:mt-0 md:ml-6"
              src={watchImage}
              alt="Smart Watches"
            />
          </div>
        </div>

        {/* Discount Section */}
        <div className="w-full bg-primary mt-10 p-4 sm:p-6 flex justify-end items-center">
          <div className="w-full sm:w-3/4 flex justify-between items-center py-6">
            <p className="text-md sm:text-lg md:text-2xl font-bold text-black">
              10% off when paying with a debit card
            </p>
            <FiTag className="h-6 sm:h-10 w-6 sm:w-10 text-black" />
          </div>
        </div>
      </div>

      {/* User's-Section */}
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between max-w-screen-2xl mx-auto py-12 md:py-24 px-4 md:px-8">
        {/* Text and Stats */}
        <div className="md:w-1/2">
          <h3 className="text-red-500 font-bold text-sm md:text-4xl mb-2">
            Comment level
          </h3>
          <h1 className="text-black font-bold text-2xl sm:text-3xl md:text-7xl mb-6">
            A new style in your Ear
          </h1>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 px-4 sm:px-8">
            {/* Stat 1 */}
            <div className="bg-[#BCCDE0] p-4 rounded-2xl shadow-md text-center py-6">
              <p className="text-red-500 text-4xl sm:text-5xl md:text-7xl font-bold">
                4M+
              </p>
              <p className="text-black text-xl sm:text-2xl md:text-4xl font-bold">
                User's
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-[#BCCDE0] p-4 rounded-2xl shadow-md text-center py-6">
              <p className="text-red-500 text-4xl sm:text-5xl md:text-7xl font-bold">
                153k
              </p>
              <p className="text-black text-xl sm:text-2xl md:text-4xl font-bold">
                Purchaser
              </p>
            </div>

            {/* Stat 3 */}
            <div className="bg-[#BCCDE0] p-4 rounded-2xl shadow-md text-center py-6">
              <p className="text-red-500 text-4xl sm:text-5xl md:text-7xl font-bold">
                53k
              </p>
              <p className="text-black text-xl sm:text-2xl md:text-4xl font-bold">
                Gallery
              </p>
            </div>

            {/* Stat 4 */}
            <div className="bg-[#BCCDE0] p-4 rounded-2xl shadow-md text-center py-6">
              <p className="text-red-500 text-4xl sm:text-5xl md:text-7xl font-bold">
                2M+
              </p>
              <p className="text-black text-xl sm:text-2xl md:text-4xl font-bold">
                Feedback
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative md:w-1/2 mb-10 md:mb-0 flex items-center justify-center">
          <div className="h-64 sm:h-80 w-[85%] sm:w-[70%] bg-red-500 rounded-s-[60%] flex justify-center items-center">
            <img
              src={watchImage}
              alt="Person with Headphones"
              className="relative z-10 w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
