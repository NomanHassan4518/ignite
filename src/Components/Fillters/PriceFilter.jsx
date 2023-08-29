import React from 'react'

const PriceFilter = () => {
  return (
    <div>
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

export default PriceFilter
