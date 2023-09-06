import React from 'react'
import { useLocation } from 'react-router-dom'
import SideBar from './SideBar'
import { useState } from 'react'

const OrderdDetails = () => {
    const [check, setCheck] = useState("")
    let location = useLocation()
    let detailData = location.state.item
    let total = parseFloat(detailData.total_before_tax) + parseFloat(detailData.tax_amount)

    const stripMethod=()=>{
        setCheck("stripe")
    }

    const onlineMethod=()=>{
        setCheck("online")
    }

    const intrestMethod=()=>{
        setCheck("intrest")
    }
    return (
        <div className='mt-6 mx-5 mb-16 grid grid-cols-12'>
            <div className='col-span-4'>
                <SideBar />
            </div>

            <div className='col-span-8 '>

                <div className='inline-flex md:ml-9 mb-2 w-full'>
                    <h1 className='text-lg md:text-xl xl:text-2xl  font-bold'>Order details:</h1>
                    <div class="inline-flex  md:ml-10  w-3/5 justify-end">
                        <h2 class={`font-bold text-lg rounded-full text-white ${detailData.payment_status === "due" ? "bg-red-600" : "bg-green-600"} p-2 w-fit h-fit`}>{detailData.payment_status}</h2>
                    </div>
                </div>

                <table className='w-full rounded-md'>
                    <thead className='bg-gray-200'>
                        <tr className='font-semibold text-lg'>
                            <td className='p-4'>Order ID</td>
                            <td className='p-4'>{detailData.invoice_no}</td>
                        </tr>

                        <tr className='font-semibold text-lg'>
                            <td className='p-4'>Product</td>
                            <td className='p-4'>Totel</td>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className='p-4'>{detailData.sell_lines[0].product_name} * {detailData.sell_lines[0].quantity}</td>
                            <td className="p-4">
                                SAR {total}
                            </td>
                        </tr>
                    </tbody>

                    <tfoot>

                        <tr className='font-semibold text-lg bg-gray-200'>
                            <td className="p-4">Shipping Fee:</td>
                            <td className="p-4">{detailData.shipping_charges}</td>
                        </tr>

                        <tr className='font-semibold text-lg '>
                            <td className="p-4">Date:</td>
                            <td className="p-4">{detailData.transaction_date}</td>
                        </tr>


                        <tr className='font-semibold text-lg bg-gray-200'>
                            <td className="p-4">Tracking Info:</td>
                            <td className="p-4"></td>
                        </tr>

                        <tr className='font-semibold text-lg '>
                            <td className="p-4">Order Type:</td>
                            <td className="p-4">{detailData.order_type}</td>
                        </tr>


                        <tr className='font-semibold text-lg bg-gray-200'>
                            <td className="p-4">Customer Name:</td>
                            <td className="p-4">{detailData.delivered_to}</td>
                        </tr>


                        <tr className='font-semibold text-lg '>
                            <td className="p-4">Shipping Address:</td>
                            <td className="p-4">{detailData.shipping_address}</td>
                        </tr>


                        <tr className='font-semibold text-lg bg-gray-200'>
                            <td className="p-4">Note:</td>
                            <td className="p-4"></td>
                        </tr>


                        <tr className='font-semibold text-lg '>
                            <td className="p-4">Discount:</td>
                            <td className="p-4">SAR {detailData.discount_amount}</td>
                        </tr>


                        <tr className='font-semibold text-lg bg-gray-200'>
                            <td className="p-4">Total:</td>
                            <td className="p-4">SAR{(parseFloat(detailData.shipping_charges) + parseFloat(total)) - parseFloat(detailData.discount_amount)}</td>
                        </tr>
                    </tfoot>
                </table>


                {detailData.payment_status === "paid" ?
                    <div className='w-full  flex justify-end   mx-6 mt-4'>
                        <div className='w-[50%] p-5'>
                            <div className='border-2 flex py-5 px-4 space-x-8 items-center border-gray-100 hover:bg-gray-200' onClick={stripMethod}>
                                <div>
                                    <input type="radio"
                                        value="stripe"
                                        checked={check === "stripe"}
                                        name='payment'
                                    />
                                </div>

                                <div className='text-center'>
                                    <p>Online Payment</p>
                                    <img src="https://apna.ignitehq.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcomponents%2Fassets%2FcardImg.7a524e7eee46cdc62481e3df275c3db7.jpg&w=828&q=75" alt="" />
                                </div>

                                <div className='w-[800px]'>
                                    <img src="https://wallet31.myignite.online/app/public/images/payment_gateway/stripe.jpg" alt="" />
                                </div>
                            </div>


                            <div className='border-2 flex py-2 px-4 mt-4 space-x-4 items-center border-gray-100 hover:bg-gray-200' onClick={onlineMethod} >
                                <div>
                                    <input type="radio"
                                        value="online"
                                        checked={check === "online"}
                                        name='payment'
                                    />
                                </div>

                                <div className='text-center flex flex-col items-start'>
                                    <p>Online Payment</p>
                                    <img src="https://apna.ignitehq.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcomponents%2Fassets%2FcardImg.7a524e7eee46cdc62481e3df275c3db7.jpg&w=828&q=75" alt="" className='w-[50%]' />
                                </div>

                               
                            </div>
                            <div className='border-2 flex py-2 px-4 space-x-4 items-center border-gray-100 hover:bg-gray-200' onClick={intrestMethod}>
                                <div>
                                    <input type="radio"
                                        value="intret-method"
                                        checked={check === "intrest"}
                                        name='payment'
                                    />
                                </div>

                                <div >
                                    <p>Online Payment</p>
                                    <img src="https://apna.ignitehq.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcomponents%2Fassets%2FcardImg.7a524e7eee46cdc62481e3df275c3db7.jpg&w=828&q=75" alt="" className='w-[50%]'/>
                                </div>

                                <div className='w-[50%]'>
                                    <img src="https://wallet31.myignite.online/app/public/images/payment_gateway/tabby.jpg" alt="" />
                                </div>
                            </div>

                            <div>
                            <button className='w-full bg-green-900 text-white font-semibold h-10 mt-4 rounded-md text-center'>Pay</button>

                            </div>
                        </div>
                    </div>
                    : ""
                }


            </div>

        </div>

    )
}

export default OrderdDetails
