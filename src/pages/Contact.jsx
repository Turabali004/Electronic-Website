import React from "react";
import { Header, Footer } from "../components";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";

function Contact() {
  return (
    <div>
      <section className="bg-blue-100 py-10 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-primary shadow-lg rounded-xl p-8 lg:p-12 flex flex-col lg:flex- justify-between items-center gap-8 my-10">
            <Header inLogin={true} />
            
            <div className="flex flex-col lg:flex-row justify-around w-full gap-8">
              {/* Left Section */}
              <div className="w-full lg:w-[25%] text-left">
                <h3 className="text-2xl md:text-4xl font-bold text-black mb-4">
                  Contact Us
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  This is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s.
                </p>
                <div className="mt-6">
                  <p className="flex items-center space-x-2">
                    <CiMail className="text-xl md:text-2xl text-red-500" />
                    <span className="text-sm md:text-base">kashifhurmat893@gmail.com</span>
                  </p>
                  <p className="flex items-center space-x-2 mt-4">
                    <MdOutlinePhone className="text-xl md:text-2xl text-red-500" />
                    <span className="text-sm md:text-base">+92 302 5058 413</span>
                  </p>
                </div>
              </div>

              {/* Right Section */}
              <div className="w-full lg:w-1/2 bg-gray-50 rounded-lg p-6 lg:p-8 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  We’d love to hear from you! Let’s get in touch
                </h2>
                <form action="#" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-600 text-sm md:text-base">Name</label>
                      <input
                        type="text"
                        className="w-full border border-red-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 text-sm md:text-base">User</label>
                      <input
                        type="text"
                        className="w-full border border-red-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Username"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-600 text-sm md:text-base">Email</label>
                      <input
                        type="email"
                        className="w-full border border-red-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Your email"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 text-sm md:text-base">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        className="w-full border border-red-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm md:text-base">Password</label>
                    <input
                      type="password"
                      className="w-full border border-red-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm md:text-base">Type text</label>
                    <textarea
                      className="w-full border border-red-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Type here"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-500 text-white py-2 rounded-lg shadow-lg hover:bg-red-600"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
