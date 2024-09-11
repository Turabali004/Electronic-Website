import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Header } from '../components';

function Login() {
  return (
    <div className="h-screen w-full bg-gray-100 flex items-center justify-center">
      <div className="w-[90%] lg:w-[70%] bg-white shadow-lg rounded-lg overflow-hidden">
        <Header inLogin={true} />
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Sign in</h2>
            <form className="space-y-4">
              <div>
                <input type="text" placeholder="Username" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <div>
                <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <div className='flex justify-between'>
              <div>
                <a href="#" className="text-sm text-gray-600 hover:underline">Forgot password?</a>
              </div>
              <div>
                <button type="submit" className="w-full py-2 px-10 shadow-md bg-red-500 text-white rounded-md hover:bg-red-600">Login</button>
              </div>
              </div>
            </form>
            <div className="flex items-center justify-between mt-4">
              <span className="border-t w-1/5 md:w-1/4"></span>
              <span className="text-xs text-gray-500 uppercase">or</span>
              <span className="border-t w-1/5 md:w-1/4"></span>
            </div>
            <div className="flex space-x-2 mt-4 justify-center gap-4 ">
              {/* <button className="flex-1 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">Google</button> */}
              <FcGoogle className='text-4xl'/>
              {/* <button className="flex-1 py-2 px-4 bg-blue-700 text-white rounded-md hover:bg-blue-800">Facebook</button> */}
              <FaFacebook className='text-4xl '/>

            </div>
          </div>
          <div className="md:w-2/3  p-8 hidden md:flex items-center justify-center">
            <img src="/public/images/authimg.png" alt="Electronics" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
