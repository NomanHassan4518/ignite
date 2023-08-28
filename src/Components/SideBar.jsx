import React from 'react'
import { brand, category, sidebarData } from './Data'

const SideBar = () => {

    return (
        <div className='w-96  flex-shrink-0 pe-24'>
            <div className="pb-7 hidden lg:flex w-full items-center overflow-hidden">
                <a href='/' >Home</a>
                <p>/</p>
                <a href='/' className='font-bold '>Shop</a>
            </div>

            <div className="block border-b-[1px] border-gray-300 mb-7 pb-7">
                <div className="flex justify-between">
                    <h2 className='font-semibold text-[30px]'>Filter</h2>
                    <button className='cursor-pointer'>Clear All</button>
                </div>
            </div>

            <div className=" border-b-[1px] border-gray-300 mb-7 pb-7">
                <h3 className='text-lg mb-7 font-semibold'>Size</h3>
                <div className="mt-2">
                    <div className="grid grid-cols-3 gap-3">
                      
{
                           sidebarData.map((a , index) => (
                                <div key={index}>
                                    <span className='cursor-pointer inline-flex justify-center items-center border rounded border-gray-300 p-2 mb-2 transition duration-200 ease-in-out text-sm uppercase font-semibold w-full hover:border-black' >
                                        <a href='/' >{a.data}</a>
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>

       

            <div className=" border-b-[1px] border-gray-300 mb-7 pb-7">
                <h3 className='text-lg mb-7 font-semibold'>Category</h3>
                <label htmlFor="" className='group flex flex-col space-y-4 cursor-pointer text-[15px] justify-center'>
                    {
                        category.map((a) => (
                            <div className="flex">
                                <input type="checkbox" className='w-5 h-5 border border-gray-300 rounded transition duration-500 ease-in-out  focus:ring-0' />
                                <span className='ms-4'>{a.title}</span>
                            </div>
                        ))
                    }
                </label>
            </div>

            <div className=" border-b-[1px] border-gray-300 mb-7 pb-7">
                <h3 className='text-lg mb-7 font-semibold'>Brand</h3>
                <label htmlFor="" className='group flex flex-col space-y-4 cursor-pointer text-[15px] justify-center'>
                    {
                        brand.map((a) => (
                            <div className="flex">
                                <input type="checkbox" className='w-5 h-5 border border-gray-300 rounded transition duration-500 ease-in-out  focus:ring-0' />
                                <span className='ms-4'>{a.title}</span>
                            </div>
                        ))
                    }
                </label>
            </div>

            <div className="block border-b-[1px] border-gray-300 mb-7 pb-10">
                <h3 className='text-lg mb-7 font-semibold'>Price</h3>

                <div className='grid grid-cols-5'>
                <input type="text" placeholder='Min Price' className='border-solid border  focus:border-2  focus:border-black focus:ring-stone-100 col-span-2 rounded p-2'/>
                    <p className='col-span-1  flex justify-center items-center'>TO</p>
                  <input type="text"  placeholder='Max Price' className='border-solid border focus:border-black focus:ring-stone-100 border-black focus:border-2  col-span-2 rounded p-2'/>
                </div>

                <div className='grid grid-cols-1 mt-3'>
                    <button className='bg-gray-950 text-gray-100 py-3 font-semibold flex items-center justify-center rounded'>Apply</button>
                </div>
            </div>








        </div>



    )
}

export default SideBar
