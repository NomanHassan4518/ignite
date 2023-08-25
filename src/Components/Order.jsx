import Item from 'antd/es/list/Item'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Order = () => {
  let productData = useSelector((state) => state.cardData)
  const [discount, setDiscount] = useState("")
  const [check , setCheck] = useState()

  const discountChange = ((e) => {
    setDiscount(e.target.value)
  })

  let paymentMethod = [


    {
      type: "Stripe",
      url: "https://apna.dev.myignite.site/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FcardImg.193edcb8.jpg&w=828&q=75"
    },
    {
      type: "Tap",
      url: "https://apna.dev.myignite.site/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FcardImg.193edcb8.jpg&w=828&q=75"
    }
  ]

const payment=(item)=>{
setCheck(item)
console.log(item)
}

  return (
    <div className='mt-6 ml-12 '>
      <h1 className='text-2xl font-bold mb-6'>Your Order</h1>

      <div className="mt-3 flex justify-between   items-center font-semibold px-3 bg-gray-300 rounded-md h-12">
        <p>Product</p>
        <p>Subtotal</p>
      </div>

      <div className="mt-3">
        {
          productData.map((Item, index) => (
            <div className='flex justify-between mt-8  border-b border-gray-200'>
              <div className="flex">
                <div className='w-20 h-20'>
                  <img src={Item.Product.url} alt="" />
                </div>
                <p className='ml-4 h-7 w-60 overflow-hidden'>{Item.Product.title}</p>
              </div>

              <div>
                <p>SAR {Item.Product.price * Item.quatity}</p>
              </div>
            </div>
          ))
        }
      </div>
      <div className="mt-8 mb-6 w-full flex ">
        <div className='w-full'>
          <input type="text" placeholder='Discount Code' value={discount} className='rounded-md h-12  w-full focus:border-none focus:ring-black ' onChange={discountChange} />
        </div>

        <div>
          <button className={`  bg-green-700 text-white text-lg font-semibold w-20 h-12 rounded-md mx-6 ${discount.length === 0 ? "cursor-not-allowed" : "cursor-pointer"} `} >Apply</button>
        </div>
      </div>

      <div className='mt-6 '>
        {
          paymentMethod.map((item)=>(
            <div className='mt-4 border-2 border-gray-200 hover:bg-gray-200 flex items-center rounded-md' onClick={()=>payment(item.type)}>
              <input type="radio"
              value={item.type}
              checked={item.type ===check}
              className='mx-4'
               />
              <div className='flex flex-col mx-7  py-3'>
                <p className='text-lg'>{item.type}</p>
                <img src={item.url} alt="" className='w-50 h-10'/>
              </div>
            </div>

          ))
        }
      </div>

    </div>
  )
}

export default Order
