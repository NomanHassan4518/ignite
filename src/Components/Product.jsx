
import React from 'react'
import SideBar from './SideBar'
import RightSide from './RightSide'
import { topProduct } from './Data'

const Product = () => {
    return (
        <div className='pt-8 px-10 '>
            <div className="flex">
                <div >
                    <SideBar />
                </div>

                <div>
                    <div className="grid grid-cols-12 mb-12">
                        <div className='col-span-8 '>
                            <p>{topProduct.length} items</p>
                        </div>
                        <div className='col-span-4 flex justify-end'>
                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-black bg-white hover:bg-white focus:ring-0 focus:outline-none focus:ring-gray-400  rounded-md text-[14px]  border-[1px] border-gray-400  px-2 py-2 text-center font-semibold inline-flex  " type="button">Sorting Options<svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" class="w-5 h-5 ml-6" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg></button>

                            <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                    <li>
                                        <a href="/" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sorting Options</a>
                                    </li>
                                    <li>
                                        <a href="/" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Price: low to high</a>
                                    </li>
                                    <li>
                                        <a href="/" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Price:high to low</a>
                                    </li>
                                    <li>
                                        <a href="/" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sort:a-z</a>
                                    </li>
                                    <li>
                                        <a href="/" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sort:z-a</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <RightSide />
                </div>
            </div>
        </div>
    )
}

export default Product
