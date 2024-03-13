import React from 'react'
import * as gi from 'react-icons/gi';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="bg-white border-gray-100 dark:bg-gray-900 shadow-xl">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1 md:p-3"> {/* Reduced padding here */}
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <div style={{ fontSize: 25 }}><gi.GiInfinity /></div>
            <span className="self-center text-l font-semibold whitespace-nowrap dark:text-white">INFINITY</span>
          </a>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul className="flex flex-col font-medium md:p-0 border border-gray-100 rounded-lg bg-gray-50 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <Link to="/">
                <li>
                <button type="button" class="text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-xs px-3 py-2 text-center me-2 mb-1">LOGOUT</button>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
