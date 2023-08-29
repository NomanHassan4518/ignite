import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../Services/Action/Action';



const Details = () => {
  const [quatity, setQuatity] = useState(1);
  const [sizeBorder, setSizeBorder] = useState()
  const dispatch = useDispatch();
  const location = useLocation()


  let productDetail = location.state.modelData.modelData
  let ind = location.state.modelData.indexOfItem

  console.log(productDetail);

  const handleCart = () => {

    const drawerData =
    {
      Product: productDetail,
      quatity: quatity
    }


    dispatch(addToCart(drawerData))
  }

  const add = () => {
    setQuatity(quatity + 1)
  }

  const sub = () => {
    setQuatity(quatity - 1)
  }

  let index = 1

  const sizebutton = (index) => {
    setSizeBorder(index)
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
              <div className='flex items-center justify-center w-80 h-56'>
                <img src={productDetail?.gallery[ind]?.original} alt='' />

              </div>
              {/* <div className='flex items-center justify-center w-80 h-56'>
                <img src={productDetail?.gallery[ind].thumbnail} alt='' />
              </div> */}

            </Carousel>

          </div>

        </div>

        <div className='col-span-4'>
          <h3 className='text-2xl font-bold mb-6'>{productDetail?.name}</h3>
          <p className='text-base text-gray-500 leading-8'>{productDetail?.description}</p>
          <h3 className='text-2xl font-bold mt-6 mb-5'>{productDetail?.price}</h3>
          <hr className='mt-9' />

          <div className='mt-6'>
            <h3 className='text-xl font-semibold '>Size</h3>

            <div className='flex space-x-3 mt-5'>

              <button className={`border-[1px]   uppercase rounded hover:border-black   cursor-pointer transition duration-200 ease-in-out w-14 h-11 flex justify-center items-center ${sizeBorder === 1 ? "border-black" : "border-gray-200"}`} onClick={() => { sizebutton(index) }}>
                <p className='font-bold text-md'>10</p>
              </button>


              <button className={`border-[1px]   flex border-gray-200 hover:border-gray-700 uppercase rounded  cursor-pointer transition duration-200 ease-in-out w-14 h-11 justify-center items-center }`} style={{ backgroundImage: `url("https://un.myignite.site/assets/images/soldout.png")`, backgroundPosition: "center center" }}  >
                <p className='font-bold text-md' >9</p>
              </button>
            </div>
          </div>
          <hr className='mt-9' />

          <div className='pe-12 my-8'>
            <div className='flex space-x-4 items-center '>
              <div className='bg-black h-9 flex rounded shadow-lg'>
                <button className='text-2xl text-white border-e border-gray-400 flex justify-center items-center lg:w-12 w-9' onClick={sub} disabled={quatity === 1}>-</button>
                <span className='lg:w-20 w-9 text-white text-xl font-bold border-e border-gray-400 flex items-center justify-center'>{quatity}</span>
                <button className='text-2xl text-white border-e border-gray-400 flex justify-center items-center  lg:w-12 w-9' onClick={add}>+</button>
              </div>

              <div className=' '>
                <button className={`px-8 h-12 w-full rounded text-[15px] flex justify-center items-center text-white font-semibold  hover:bg-black transition duration-500 ease-in-out ${sizeBorder === 1 ? "bg-black cursor-pointer" : "bg-[#999999] cursor-not-allowed "}`} disabled={sizeBorder !== 1} onClick={handleCart}>
                  Add to Cart
                </button>
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
