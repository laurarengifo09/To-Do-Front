import {FiSearch, FiBell } from 'react-icons/fi';


export function Navbar() {
    return(
      <div className="flex items-center py-6  bg-white shadow-lg text-gray-800">
      <div className=" px-10 w-full flex flex-col md:flex-row justify-between items-center mx-auto">
        <div className="flex md:flex-grow md:items-center md:justify-start">
          <span className="text-3xl font-extrabold text-indigo-800">TODO APP</span>
        </div>
        <div className="flex justify-end items-center space-x-4">
          <span className="hidden md:block text-gray-800">Welcome back</span>
          <div className="flex items-center bg-gray-100 p-2 rounded-md">
            <FiSearch className="text-indigo-800" />
            <input className="bg-transparent ml-2 outline-none" type="text" placeholder="Search..." />
          </div>
          <a href="#" className="text-indigo-800 hover:text-purple-700">
            <FiBell />
          </a>
        </div>
      </div>
    </div>
    );
  }