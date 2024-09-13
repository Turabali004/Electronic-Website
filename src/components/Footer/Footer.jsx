import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="bg-primary text-gray-700 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <h2 className="text-xl font-bold mb-4">
              Your Gateway to Success Start
            </h2>
            <h2 className="text-xl font-bold mb-4">Pages</h2>
            <h2 className="text-xl font-bold mb-4">Other</h2>
            <h2 className="text-xl font-bold mb-4">Utility</h2>
          </div>
          <hr className="bg-white my-4"/>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            <div>
              <p className="font-bold">Here!</p>
              <div className="mt-2 flex items-center space-x-2">
                <span className="text-red-500 ">
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
                </span>
                <span className="text-gray-600 font-bold">hello@helloflow.com</span>
              </div>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <FaYoutube size="20" />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <FaLinkedinIn size="20" />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <FaTwitter size="20" />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <FaFacebookF size="20" />
                </a>
              </div>
            </div>
            <div>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/demo"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Demo (Sales)
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-600 hover:text-gray-800">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/work"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Shop
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li>
                  <Link to="/404" className="text-gray-600 hover:text-gray-800">
                    404
                  </Link>
                </li>
                <li>
                  <Link
                    to="/password"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Password
                  </Link>
                </li>
                <li>
                  <Link
                    to="/checkout"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Checkout
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog-details"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Blog Details
                  </Link>
                </li>
                <li>
                  <Link
                    to="/work-details"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Work Details
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop-details"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Shop Details
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/style-guide"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Style Guide
                  </Link>
                </li>
                <li>
                  <Link
                    to="/licencing"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Licencing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/change-log"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Change log
                  </Link>
                </li>
                <li>
                  <Link
                    to="/instructions"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Instructions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/templates"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    All Templates
                  </Link>
                </li>
                <li>
                  <Link
                    to="/supports"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Supports
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <hr className="bg-white my-4 "/>
          <div className="mt-8 flex justify-between items-center w-3/4">
          <span className="text-gray-600 font-bold text-2xl">Your logo</span>
            <span className="text-gray-600">
              &copy; 2024-Powered by Webflow With{" "}
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Buy this template for $69 USD
              </a>
            </span>
            
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
