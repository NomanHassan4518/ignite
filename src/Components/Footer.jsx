import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (

        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full ">
                <div className="grid grid-cols-2 lg:gap-8 gap-2 px-4 py-6 lg:py-8 md:grid-cols-4">

                    <div>
                        <h2 className="mb-4 mx-4 font-semibold  text-sm lg:text-lg text-black  dark:text-white">Social</h2>
                        <ul className="text-gray-500 dark:text-gray-400  mx-3">
                            <li className="mb-2">
                                <Link to="https://instagram.com/urban_necessities_riyadh" className=" flex ">
                                    <span><AiOutlineInstagram className='mt-[0.45rem]' /> </span>
                                    <span className='mx-3 hover:text-black'>Instagram</span>
                                </Link>
                            </li>

                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-4 mx-4 font-semibold text-sm lg:text-lg text-black dark:text-white">Contact</h2>
                        <ul className="text-gray-500 dark:text-gray-400  mx-3">
                            <li className="mb-2">
                                <Link to="/" className=" flex ">
                                    <span className='mx-3 hover:text-black'>info@avllc.com.sa</span>
                                </Link>
                            </li>

                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-4 mx-4 font-semibold text-sm lg:text-lg text-black  dark:text-white">About</h2>
                        <ul className="text-gray-500 dark:text-gray-400  mx-3">
                            <li className="mb-2">
                                <Link to="/about" className=" flex ">
                                    <span className='mx-3 hover:text-black'>About Us</span>
                                </Link>
                            </li>

                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-4 mx-4 font-semibold text-sm lg:text-lg text-black  dark:text-white">Our Information</h2>
                        <ul className="text-gray-500 dark:text-gray-400  mx-3">
                            <li className="mb-2">
                                <Link to="/privacy" className=" flex ">
                                    <span className='mx-3 hover:text-black'>Privacy policy</span>
                                </Link>
                            </li>

                            <li className="mb-4">
                                <Link to="/terms" className=" hover:text-black mx-3">Terms & conditions</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/returns" className="hover:text-black mx-3">Returns & Refunds Policy</Link>
                            </li>

                            <li className="mb-4">
                                <Link to="/faq" className="hover:text-black mx-3">FAQ & Helps</Link>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
            <div className="w-full mx-auto border-t-[1px] mb-20 lg:mb-1 flex flex-col-reverse   lg:flex-row justify-center items-center border-gray-300 max-w-screen-xl p-4 lg:p-1 md:flex md:items-center md:justify-between">
                <span className="text-xs lg:text-sm text-gray-500 sm:text-center dark:text-gray-400 flex flex-wrap w-full justify-center lg:justify-start items-center mt-1">Copyright © 2023  <Link to="/" className="font-semibold text-black">Urban Necessities Riyadh</Link>. All Rights Reserved.
                </span>
                <span className='mt-3 text-xl lg:w-52'>
                    Powered by <Link to="https://ignite.tech" target='_blank' className='font-bold text-black'>Ignite</Link>
                </span>
            </div>
        </footer>

    )
}

export default Footer
