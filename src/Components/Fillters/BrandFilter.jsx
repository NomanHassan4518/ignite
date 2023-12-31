import React from 'react'

const BrandFilter = () => {
    let brand = JSON.parse(localStorage.getItem('Brands'))
  return (
    <div>
      <div className=" border-b-[1px] border-gray-300 mb-7 pb-7">
                <h3 className='text-lg mb-7 font-semibold'>Brand</h3>
                <label htmlFor="" className='group flex flex-col space-y-4 cursor-pointer text-[15px] justify-center'>
                    {
                        brand.map((item) => (
                            <div className="flex">
                                <input type="checkbox" className='w-5 h-5 border border-gray-300 rounded transition duration-500 ease-in-out  focus:ring-0' />
                                <span className='ms-4'>{item.name}</span>
                            </div>
                        ))
                    }
                </label>
            </div>
    </div>
  )
}

export default BrandFilter
