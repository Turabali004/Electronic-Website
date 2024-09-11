import React from "react";
import { Header } from "../components";
import mobileAccessoriesImage from "/public/images/authimg.png"; // adjust the path as needed

function About() {
  const statistics = [
    { value: "870", label: "Shops" },
    { value: "20,000+", label: "Users" },
    { value: "260", label: "Subscribes" },
    { value: "73,990", label: "Active" },
  ];
  return (
    <div>
      <Header inLogin={true} />
      <div className="w-screen bg-primary text-center p-4 font-semibold">
        Are you university or school for an onlnie partnership?
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-evenly px- bg-white">
        <div className="w-2/5 mb-8 lg:mb-0 px-20">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">
            Open a Mobile Accessories Store Online
          </h1>
          <p className="text-lg lg:text-3xl mb-4  font-semibold ">
            Best Tips to Start an Online Business
          </p>
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg font-semibold">
            Shop now
          </button>
        </div>
        <div className="w-3/5 flex justify-center items-center lg:justify-end ">
          <img
            src={mobileAccessoriesImage}
            alt="Mobile Accessories"
            className="w-full"
          />
        </div>
      </div>

      {/* Statistics-Section */}
      <div className="bg-blue-200 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-around items-center">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center mb-8 md:mb-0">
                <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
                <p className="text-xl md:text-2xl">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Befnefit-Section */}
      <div className="bg-gray-100 py-20">
        {/* First Section */}
        <section className="py-16 bg-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-red-500 text-lg font-semibold">
              Why choose us
            </h3>
            <h2 className="text-3xl font-bold mt-2">
              Benefits of online buying service with us
            </h2>
          </div>

          <div className="container mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4 px-4">
            {/* Card 1 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Choose teaching</h3>
              <p className="text-gray-600">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry standard.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">24/7 Available</h3>
              <p className="text-gray-600">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry standard.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Whiteboard</h3>
              <p className="text-gray-600">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry standard.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Affordable Price</h3>
              <p className="text-gray-600">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry standard.
              </p>
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section className="py-16 ">
          <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 px-4">
            {/* Image Section with Circular Image */}
            <div className="relative w-full lg:w-1/2">
              <img
                className="rounded-lg shadow-lg w-full"
                src="https://cdn.pixabay.com/photo/2020/03/13/18/10/girl-4928767_1280.jpg"
                alt="Customer interaction"
              />

              {/* Circular Image */}
              <div className="absolute bottom-[-30px] right-[-30px]">
                <img
                  className="w-24 h-24 rounded-full shadow-lg"
                  src="https://images.unsplash.com/photo-1478198697312-304b0bd9475f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWNjZXNzb3JpZXMlMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Circle icon"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 text-left">
              <h3 className="text-red-500 text-lg font-semibold">
                Customer your product us
              </h3>
              <h2 className="text-3xl font-bold mt-2">
                Personalized professional online buying on your schedule
              </h2>
              <p className="text-gray-600 mt-4">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>

              <button className="mt-6 bg-red-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-red-600">
                Get started
              </button>
            </div>
          </div>

          {/* Additional Image Section */}
        </section>

        {/* Third Section */}
        <div className="py-16 ">
          <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 px-4">
            {/* Text Section */}
            <div className="w-full lg:w-1/2 text-left">
              <h3 className="text-red-500 text-lg font-semibold">
                Customer your product with us
              </h3>
              <h2 className="text-3xl font-bold mt-2">
                Personalized professional online buying on your schedule
              </h2>
              <p className="text-gray-600 mt-4">
                This is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <button className="mt-6 bg-red-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-red-600">
                Get started
              </button>
            </div>

            {/* Image Section (Images stacked vertically) */}
            <div className="relative w-full lg:w-1/2 flex flex-col items-center gap-4">
              {/* First Image */}
              <img
                className=" shadow-lg w-80 h-72 "
                src="https://images.unsplash.com/photo-1568746980529-9061a45c8c88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFjY2Vzc29yaWVzJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D" // Replace with actual image path
                alt="Background"
              />
              {/* Second Image (Stacked below the first) */}
              <img
                className="absolute top-24 -right-0 w-80 h-72 shadow-lg"
                src="https://images.unsplash.com/photo-1630080644615-0b157f1574ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFjY2Vzc29yaWVzJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D" // Replace with actual image path
                alt="Overlay"
              />
            </div>
          </div>
        </div>
      </div>


      {/* Testimonial-Section */}

      <section className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-red-600 text-lg font-semibold mb-2">Our testimonial</h2>
        <h3 className="text-black text-2xl font-bold mb-8">What our users say about us</h3>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 ">
          <div className="testimonial-user">
            <img
              src="https://via.placeholder.com/150 "
              alt="User 1"
              className=" rounded-full mb-4 h-20"
            />
            
          </div>
          <div className="testimonial-user">
            <img
              src="https://via.placeholder.com/150"
              alt="User 2"
              className="mx-auto rounded-full mb-4 h-20"
            />
            <p className="font-semibold">About John</p>
            <p className="text-gray-600 text-sm">Software Engineer</p>
            <p className="text-gray-500 mt-4 text-sm">
              Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>
          <div className="testimonial-user">
            <img
              src="https://via.placeholder.com/150"
              alt="User 3"
              className="mx-auto rounded-full mb-4 h-20"
            />
            
          </div>
        </div>
      </div>
    </section>



      <div className="h-96"></div>
    </div>

    
  );
}

export default About;
