import React from 'react'

const Header = () => {
  return (
    <div>
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
    </div>
  )
}

export default Header
