import React from 'react'
import { topProduct } from './Data'
import Modal from 'react-modal';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar'
import { Drawer } from 'antd'
import { useDispatch } from 'react-redux';
import { addToCart } from '../Services/Action/Action';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: "75%",
    height: "450px"
  },
};

const RightSide = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modelData, setModelData] = useState("")
  const [quatity, setQuatity] = useState(1)
  const [sizeBorder, setSizeBorder] = useState()
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const passData = (title) => {
    navigate("/detail", { state: { modelData: modelData } })
  }

  const handleCart =()=>{

    const drawerData = 
      {
        Product:modelData,
        quatity:quatity
      }
    

    dispatch(addToCart(drawerData))
  }

  const sidebar = () => {
    setisOpen(true)
  }

  const handClick = (product) => {
    setIsOpen(true)
    setModelData(product)
  }

  const add = () => {
    setQuatity(quatity + 1)
  }

  const sub = () => {
    setQuatity(quatity - 1)
  }


  function closeModal() {
    setIsOpen(false);
  }

  const [isOpen, setisOpen] = React.useState(false)

  const toggleDrawer = () => {
    setisOpen(false)
  }

  let index = 1

  const sizebutton = (index) => {
    setSizeBorder(index)
  }


  let title = <h1 className='text-center text-3xl font-bold'>Filters</h1>
  return (
    <>
      <div>
        <div className="flex flex-col ">

          <div className="grid grid-cols-12">
            <div className="col-span-9"></div>
            <div className='col-span-3 flex justify-end'>
              <p className='text-lg text-gray-500'>{topProduct.length} items</p>
            </div>
          </div>

          <div className='mt-12 md:px-5 mb-10 flex items-center justify-between'>

            <button onClick={sidebar} class="text-black  w-[7rem] h-9 bg-white hover:bg-white focus:ring-0 focus:outline-none focus:ring-gray-400  rounded-md text-[14px]  border-[1px] border-gray-400 lg:hidden flex items-center justify-center text-center font-semibold   ">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="18px" height="14px" viewBox="0 0 18 14"><g id="Group_36196" data-name="Group 36196" transform="translate(-925 -1122.489)"><path id="Path_22590" data-name="Path 22590" d="M942.581,1295.564H925.419c-.231,0-.419-.336-.419-.75s.187-.75.419-.75h17.163c.231,0,.419.336.419.75S942.813,1295.564,942.581,1295.564Z" transform="translate(0 -169.575)" fill="currentColor"></path><path id="Path_22591" data-name="Path 22591" d="M942.581,1951.5H925.419c-.231,0-.419-.336-.419-.75s.187-.75.419-.75h17.163c.231,0,.419.336.419.75S942.813,1951.5,942.581,1951.5Z" transform="translate(0 -816.512)" fill="currentColor"></path><path id="Path_22593" data-name="Path 22593" d="M1163.713,1122.489a2.5,2.5,0,1,0,1.768.732A2.483,2.483,0,0,0,1163.713,1122.489Z" transform="translate(-233.213)" fill="currentColor"></path><path id="Path_22594" data-name="Path 22594" d="M2344.886,1779.157a2.5,2.5,0,1,0,.731,1.768A2.488,2.488,0,0,0,2344.886,1779.157Z" transform="translate(-1405.617 -646.936)" fill="currentColor"></path></g></svg> </span><span className='mx-1'>Filters</span>
            </button>

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
          <div className="grid grid-cols-12 space-x-4">
            {
              topProduct.map((product) => (
                <div className="col-span-6 sm:col-span-4 lg:col-span-3 mb-6" onClick={() => { handClick(product) }}>
                  <div className="flex flex-col box-border lg:h-[20rem]  justify-center rounded-md cursor-pointer pb-3 items-start hover:shadow-lg  px-3 duration-500 ease-in-out">
                    <div className='lg:px-4  lg:mb-8 mt-6'>
                      <img src={product.url} alt="" className='w-full lg:w-[85%]' />
                    </div>

                    <div className='lg:py-5 lg:mt-[3rem] mt-5'>
                      <h1 className='h-6 lg:h-8 text-base lg:text-lg overflow-hidden font-semibold'>{product.title}</h1>
                      <p className='h-7 overflow-hidden'>{product.desc}</p>
                      <h1 className='text-lg font-semibold'>{product.price}</h1>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>

        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          overlayClassName="Overlay2"
        >
          <AiOutlineClose onClick={closeModal} />
          <div className="h-[28rem] overflow-y-autoscroll">
            <div className=' lg:grid lg:grid-cols-12 flex flex-col'>


              <div className='w-full lg:col-span-6  flex items-center justify-center h-full overflow-hidden'>
                <img src={modelData.url} alt="" className='lg:w-[88%]' />
              </div>


              <div className='lg:col-span-6 mt-5'>
                <h3 className='font-semibold text-3xl mb-3 overflow-hidden h-9'>{modelData.title}</h3>
                <p className='text-md text-gray-500 leading-7'>{modelData.desc}</p>
                <h1 className='font-semibold text-3xl mb-3  h-7 my-5'>{modelData.price}</h1>

                <h1 className='text-lg font-semibold mt-9 mb-5'>Size</h1>

                <div className='flex space-x-3'>

                <button className={`border-[1px]   uppercase rounded hover:border-black   cursor-pointer transition duration-200 ease-in-out w-14 h-11 flex justify-center items-center ${sizeBorder === 1 ? "border-black" : "border-gray-200"}`} onClick={() => { sizebutton(index) }}>
                    <p className='font-bold text-md'>10</p>
                  </button>


                  <button className='border-[1px]  flex border-gray-200 uppercase rounded hover:border-gray-950 cursor-pointer transition duration-200 ease-in-out w-14 h-11 justify-center items-center' style={{ backgroundImage: `url("https://un.myignite.site/assets/images/soldout.png")`, backgroundPosition: "center center" }}>
                    <p className='font-bold text-md' >8</p>
                  </button>
                </div>



                <div className='flex mt-5 items-center justify-center space-x-4'>

                  <div className="flex bg-black text-white font-bold text-lg h-10 rounded-md">
                    <button className='flex justify-center items-center w-9 lg:w-12 border-e border-gray-400 cursor-pointer' onClick={sub} disabled={quatity === 1}>-</button>
                    <span className='flex justify-center items-center lg:w-20 w-9'>{quatity}</span>
                    <button className='flex justify-center  items-center lg:w-12 w-9 border-s border-gray-400' onClick={add} >+</button>
                  </div>


                  <button className={`lg:px-8 bg-[#999999] h-12 w-full rounded text-[15px] flex justify-center items-center text-white font-semibold cursor-not-allowed hover:bg-black transition duration-500 ease-in-out ${sizeBorder===1? "bg-black cursor-pointer":"bg-[#999999] cursor-not-allowed "}`} disabled={sizeBorder!==1} onClick={handleCart}>
                    Add to Cart
                  </button>
                </div>
                <button onClick={() => { passData(modelData.title) }} className='bg-black text-white my-7 font-semibold text-[16px] rounded w-full h-12'>
                  View Details
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>

      <div className='mx-5'>
        <Drawer
          title={title}
          open={isOpen}
          onClose={toggleDrawer}
          direction='right'
          className='bla bla bla'
        >
          <SideBar />
        </Drawer>
      </div>
    </>
  )
}

export default RightSide
