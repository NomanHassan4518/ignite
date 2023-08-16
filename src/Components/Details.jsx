import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useLocation } from 'react-router-dom'
import { useState } from 'react'



const Details = (state) => {
  const [quantity, setQuatity] = useState(1)
  const location = useLocation();
  let productDetail = location.state.modelData

  const add = () => {
    setQuatity(quantity + 1)
  }

  const sub = () => {
    setQuatity(quantity - 1)
  }

  return (
    <div className='md:px-8 mt-8'>

      <div className="flex space-x-3">
        <span><a href='/' className='text-gray-400 hover:text-black'>Home  /  </a></span>
        <span><a href='/product' className='text-gray-400 hover:text-black'>Product  /</a></span>
        <span><a href='/' className='text-gray-400 hover:text-black'>1500 Concepts Cm1500cp</a></span>
      </div>

      <div className="lg:grid lg:grid-cols-9 gap-x-5 mx-6 mt-4">
        <div className='col-span-5'>
          <div className='block'>
            <Carousel
              showStatus={false}
              showIndicators={false}
            >
              <div className='flex items-center justify-center'>
                <img src={productDetail.url} alt=''/>

              </div>
              <div className='flex items-center justify-center'>
                <img src={productDetail.url1} alt=''/>

              </div>

            </Carousel>

          </div>

        </div>

        <div className='col-span-4'>
          <h3 className='text-2xl font-bold mb-6'>{productDetail.title}</h3>
          <p className='text-base text-gray-500 leading-8'>{productDetail.desc}</p>
          <h3 className='text-2xl font-bold mt-6 mb-5'>{productDetail.price}</h3>
          <hr className='mt-9' />

          <div className='mt-6'>
            <h3 className='text-xl font-semibold '>Size</h3>
            <button className='border-[1px] rounded border-black w-14 h-12 mt-5' style={{ backgroundImage: `url("https://un.myignite.site/assets/images/soldout.png")`, backgroundPosition: "center center" }}>9</button>
          </div>
          <hr className='mt-9' />

          <div className='pe-12 my-8'>
            <div className='flex space-x-4 items-center '>
              <div className='bg-black h-9 flex rounded shadow-lg'>
                <button className='text-2xl text-white border-e border-gray-400 flex justify-center items-center lg:w-12 w-9' onClick={sub} disabled={quantity === 1}>-</button>
                <span className='lg:w-20 w-9 text-white text-xl font-bold border-e border-gray-400 flex items-center justify-center'>{quantity}</span>
                <button className='text-2xl text-white border-e border-gray-400 flex justify-center items-center  lg:w-12 w-9' onClick={add}>+</button>
              </div>

              <div className=' '>
                <button className='lg:px-8 w-[10rem] sm:w-[30rem] bg-gray-400 hover:bg-black cursor-not-allowed h-12 lg:w-80 rounded text-[15px] flex justify-center shadow-lg items-center text-white font-semibold  transition duration-500 ease-in-out '>Add to Cart</button>
              </div>
            </div>
          </div>
          <hr className='mt-9' />


          <div className='mt-6 space-y-4 mb-4'>

            <p><span className='font-semibold'>SKU: </span> 100001-1</p>
            <p><span className='font-semibold'>Category: </span>New Balance</p>

          </div>


        </div>


      </div>
    </div>
  )
}

export default Details
