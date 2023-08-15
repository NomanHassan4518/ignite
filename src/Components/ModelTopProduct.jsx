import React from 'react'
import Modal from 'react-modal';
import { topProduct } from './Data'
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

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
const ModelTopProduct = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modelData, setModelData] = useState("")
  const [quatity, setQuatity] = useState(1);
  const navigate = useNavigate()

  const passData = () => {
    navigate("/detail", { state: { modelData: modelData } })
  }

  function handleClick(Product) {
    setIsOpen(true);
    setModelData(Product);

  }

  console.log(modelData);

  function closeModal() {
    setIsOpen(false);
  }

  const add = () => {
    setQuatity(quatity + 1)
  }

  const sub = () => {
    setQuatity(quatity - 1)
  }
  return (
    <>
      <div>
        <div>

          <div className=" border-[1px] rounded-lg border-gray-300 pt-6 mx-4 lg:px-4 lg:mx-9 pb-7">
            <div className="flex items-center justify-between mb-4 mx-2 ">
              <h3 className='text-lg lg:text-2xl font-bold mx-2 lg:mx-5 lg:mb-4'>Top Product</h3>
              <a href="/" className='text-[1rem] '>See All Product</a>
            </div>

            <div className='grid grid-cols-12 gap-4'>
              {
                topProduct.map((Product) => (

                  <div className='col-span-12 sm:col-span-6 mx-2' key={Product.id} onClick={() => { handleClick(Product) }}>
                    <div className="group rounded-md h-32 lg:h-[13rem] flex-row box-border flex overflow-hidden pe-3 items-center cursor-pointer bg-[#f9f9f9] transition-transform ease-linear ">
                      <div className='flex flex-shrink mx-5 w-72'>
                        <img src={Product.url} alt="" className='group-hover:scale-105 transition-transform ease-in-out duration-500' />
                      </div>
                      <div className='w-full  overflow-hidden lg:mx-5 mt-4'>
                        <h3 className='font-semibold text-base lg:text-xl overflow-hidden h-7' >{Product.title}</h3>
                        <p className='text-sm lg:text-base text-gray-400 lg:my-2 overflow-y-hidden overflow-x-hidden w-[80%] h-[25px] overflow-hidden '>
                          <div>{Product.desc}</div>
                        </p>
                        <h3 className='font-semibold text-base lg:text-xl'>{Product.price}</h3>
                      </div>
                    </div>
                  </div>

                ))
              }
            </div>
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
            <div className='lg:grid lg:grid-cols-12 flex flex-col'>

              <div className='w-full lg:col-span-6  flex items-center justify-center h-full overflow-hidden'>
                <img src={modelData.url} alt="" className='lg:w-[88%]' />
              </div>


              <div className='lg:col-span-6 '>
                <h3 className='font-semibold text-3xl mb-3 overflow-hidden h-9'>{modelData.title}</h3>
                <p className='text-md text-gray-500 leading-7'>{modelData.desc}</p>
                <h1 className='font-semibold text-3xl mb-3  h-7 my-5'>{modelData.price}</h1>

                <h1 className='text-lg font-semibold mt-9 mb-5'>Size</h1>

                <div className='flex space-x-3'>

                  <div className='border-[1px]  border-gray-200 uppercase rounded hover:border-black cursor-pointer transition duration-200 ease-in-out w-14 h-11 flex justify-center items-center'>
                    <p className='font-bold text-md'>8</p>
                  </div>


                  <div className='border-[1px]  flex border-gray-200 uppercase rounded hover:border-gray-950 cursor-pointer transition duration-200 ease-in-out w-14 h-11 justify-center items-center' style={{ backgroundImage: `url("https://un.myignite.site/assets/images/soldout.png")`, backgroundPosition: "center center" }}>
                    <p className='font-bold text-md' >8</p>
                  </div>
                </div>



                <div className='flex mt-5 items-center justify-center space-x-4'>

                  <div className="flex bg-black text-white font-bold text-lg h-10 rounded-md">
                    <button className='flex justify-center items-center w-12 border-e border-gray-400 cursor-pointer' onClick={sub} disabled={quatity === 1}>-</button>
                    <span className='flex justify-center items-center lg:w-20 w-5  '>{quatity}</span>
                    <button className='flex justify-center  items-center w-8 border-s border-gray-400' onClick={add} >+</button>
                  </div>


                  <button className='px-8 bg-[#999999] h-12 w-full rounded text-[15px] flex justify-center items-center text-white font-semibold cursor-not-allowed hover:bg-black transition duration-500 ease-in-out'>
                    Add to Cart
                  </button>
                </div>



                <button onClick={() => { passData() }} className='bg-black text-white my-7 font-semibold text-[16px] rounded w-full h-12'>
                  View Details
                </button>
              </div>


            </div>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default ModelTopProduct
