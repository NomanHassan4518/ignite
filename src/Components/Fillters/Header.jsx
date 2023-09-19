import React from 'react'
// import { useDispatch } from 'react-redux'
import { IoIosClose } from 'react-icons/io'
// import { clearAllSize, removeSizeFilter } from '../../Services/Action/Action';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  let location = useLocation()
  const [filterBySize , setFilterbySize]=useState(location?.state? location?.state?.updateVariation:[])

// let filterbySize =
  // let filterbySize = useSelector(state => state.arrayFilterbySize)
  // let dispatch = useDispatch()

  const filterSize = (index) => {
    setFilterbySize(
      filterBySize.filter((i, ind) => ind !== index)
    )
  }

  const clearAll = () => {
   setFilterbySize([])
  }
  return (
    <div>
      <div className="pb-7 hidden lg:flex w-full items-center overflow-hidden">
        <Link to='/' >Home</Link>
        <p>/</p>
        <Link to='/' className='font-bold '>Shop</Link>
      </div>

      <div className="block border-b-[1px] border-gray-300 mb-7 pb-7">
        <div className="flex justify-between">
          <h2 className='font-semibold text-[30px]'>Filter</h2>
          <button className='cursor-pointer' onClick={clearAll}>Clear All</button>
        </div>

        <div className='flex flex-wrap '>
          {
            filterBySize?.map((value, index) => (
              <div className='rounded-md py-1 px-3 text-sm border-[1px] cursor-pointer border-gray-200 hover:border-black duration-500 mx-3 items-center uppercase  my-3 flex justify-between' key={index} onClick={() => filterSize(index)}>
                <space>{value}</space>
                <p>  <IoIosClose style={{ width: "20px", height: "20px" }} /></p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Header
