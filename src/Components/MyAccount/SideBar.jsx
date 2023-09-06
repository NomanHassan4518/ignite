import React from 'react'
import { Link } from 'react-router-dom'


const SideBar = () => {
    const handlelogout = async () => {
      
      };
    
  return (
    <div>
        <aside id="separator-sidebar" className="absolute w-96  transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto ">
            <ul className="space-y-2 font-medium">
                <li className='focus:ring-2' >
                    <Link to="/my-account" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100  dark:hover:bg-none group" >
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"></path></svg>
                        <span className="ml-3">Dashboard</span>
                    </Link>
                </li>

                <li  >
                 
                 <Link to="/my-account/orders" className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white  hover:bg-gray-100`} >
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="176" cy="416" r="16" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><circle cx="400" cy="416" r="16" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 80h64l48 272h256"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"></path></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Orders</span>

                    </Link>
                </li>
                <li>
                    <Link to="/my-account/account-details" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"></path><path fill="none" stroke-miterlimit="10" stroke-width="32" d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"></path></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Account Details</span>

                    </Link>
                </li>
                <li>
                    <Link to="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40m64 160l80-80-80-80m-192 80h256"></path></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap" onClick={handlelogout}>Logout</span>
                    </Link>
                </li>

            </ul>

        </div>
    </aside>
    </div>
  )
}

export default SideBar
