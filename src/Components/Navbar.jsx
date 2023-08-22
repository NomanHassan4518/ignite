import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import Model from './SearchModel'
import SignIn from './SignIn'
import { Drawer } from 'antd'
import MobileNavbar from './MobileNavbar'
import NavigationBar from './NavigationBar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineClose } from 'react-icons/ai'
import { removeToCart } from '../Services/Action/Action'

const Navbar = () => {
    let myData = useSelector((state) => state.cardData);
    const [isOpen, setIsOpen] = useState(false)
    const [cardProduct, setCardProduct] = useState(null);
    const [price, setPrice] = useState(null)
    let dispatch = useDispatch()

    // console.log(cardProduct)
    useEffect(() => {
        if (myData) {
            setCardProduct(myData)
        }

        myData.map((p) => (
            setPrice(p.Product?.price)
        ))
    }, [myData])


    const toggleDrawer = () => {
        setIsOpen(false)
    }

    const drawweOpen = () => {
        setIsOpen(true)
    }

    const add = (index, items) => {
        let array = [...cardProduct]
        let value = array[index].quatity
        array[index].quatity = value + 1
        setCardProduct(array)
    }

    const sub = (index) => {
        let array = [...cardProduct]
        let value = array[index].quatity
        array[index].quatity = value - 1
        setCardProduct(array)
    }

    const remove = (index) => {
        // let arr = cardProduct.filter((item, index) => index !== ind)
        // setCardProduct(arr)
        dispatch(removeToCart(index))
    }


    let title = <h1 className='text-3xl font-semibold text-center'>Shopping cart</h1>
    return (
        <>



            <header className=' flex w-full bg-[#fff] z-10  h-24 items-center  justify-center sticky top-0'>
                <div className='flex w-full items-center'>

                    <div className='hidden md:block lg:hidden pl-10'>
                        <NavigationBar />
                    </div>
                    <div>
                        <Link to='/'>
                            <div className=' px-10 py-8'>
                                <img src="https://un.myignite.site/_next/image?url=https%3A%2F%2Fignitestorage.blob.core.windows.net%2Figniteadmin-prod%2Fuploads%2Fbusiness_logos%2F1673962751_ezgif.com-gif-maker.png&w=64&q=75" style={{ height: "60px", width: "60px" }} alt="" />
                            </div>
                        </Link>


                    </div>




                    <nav className='bg-white lg:block hidden '>
                        <div className=" flex space-x-6 items-center justify-center">
                            <div className='group py-7'>
                                <Link to="/" className='inline-flex items-center text-sm relative px-2 py-[3px] font-normal text-gray-600 group-hover:text-black '>
                                    <span className='text-xl '>Home</span>
                                </Link>
                            </div>
                            <div className='group py-7'>
                                <Link to="/shop" className='inline-flex items-center text-sm relative px-2 py-[3px] font-normal  group-hover:text-black '>
                                    <span className='text-xl '>Categories</span>
                                    <IoIosArrowDown className='text-gray-400 pt-1 text-[1.3rem]' />
                                </Link>
                                <div className="menu shadow-inherit z-50 absolute start-20 mt-6 opacity-0 group-hover:opacity-100  invisible group-hover:visible" >
                                    <div className="grid grid-cols-4 z-50">
                                        <ul className='bg-[#f9f9f9] pb-7 pt-6'>
                                            <li className='mb-3'>
                                                <a href='/' className='block font-semibold py-[3px] px-20 hover:bg-gray-300 '>New Balance</a>
                                            </li>
                                            <li className='mb-3'>
                                                <a href='/' className='block font-semibold py-[3px] px-20 hover:bg-gray-300 '>Air Jordan</a>
                                            </li>
                                            <li className='mb-3'>
                                                <a href='/' className='block font-semibold py-[3px] px-20 hover:bg-gray-300 '>Adidas</a>
                                            </li>
                                            <li className='mb-3'>
                                                <a href='/' className='block font-semibold py-[3px] px-20 hover:bg-gray-300 '>Nike</a>
                                            </li>
                                            <li className='mb-3'>
                                                <a href='/' className='block font-semibold py-[3px] px-20 hover:bg-gray-300 '>Puma</a>
                                            </li>
                                            <li className='mb-3'>
                                                <a href='/' className='block font-semibold py-[3px] px-20 hover:bg-gray-300 '>Reebok</a>
                                            </li>
                                            <li className='mb-3'>
                                                <a href='/' className='block font-semibold py-[3px] px-20 hover:bg-gray-300 '>Asics</a>
                                            </li>
                                            <li className='mb-3'>
                                                <a href='/' className='block font-semibold py-[3px] px-20 hover:bg-gray-300 '>Under Armour</a>
                                            </li>
                                            <li className='mb-3'>
                                                <a href='/' className='block font-semibold py-[3px] px-20 hover:bg-gray-300 '>Fila</a>
                                            </li>
                                        </ul>
                                        <ul className='bg-[#f1f1f1] pb-7 pt-6'>
                                            <li className='mb-3'>
                                                <a href='/' className='block font-semibold p-[3px] px-20 hover:bg-gray-300 '>Marc Jacobs</a>
                                            </li>
                                            <li className='mb-3'>
                                                <a href='/' className='block font-semibold p-[3px] px-20 hover:bg-gray-300 '>Timberland</a>
                                            </li>
                                            <li className='mb-3'>
                                                <a href='/' className='block font-semibold p-[3px] px-20 hover:bg-gray-300 '>Converse</a>
                                            </li>
                                            <li className='mb-3'>
                                                <a href='/' className='block font-semibold p-[3px] px-20 hover:bg-gray-300 '>Sperry</a>
                                            </li>
                                            <li className='mb-3'>
                                                <a href='/' className='block font-semibold p-[3px] px-20 hover:bg-gray-300 '>Vans</a>
                                            </li>
                                            <li className='mb-3'>
                                                <a href='/' className='block font-semibold p-[3px] px-20 hover:bg-gray-300 '>Yeezy</a>
                                            </li>
                                            <li className='mb-3'>
                                                <a href='/' className='block font-semibold p-[3px] px-20 hover:bg-gray-300 '>Zero Lo</a>
                                            </li>
                                            <li className='mb-3'>
                                                <a href='/' className='block font-semibold p-[3px] px-20 hover:bg-gray-300 '>SRGN Custom</a>
                                            </li>
                                        </ul>
                                        <ul className='bg-[#f9f9f9] pb-7 pt-6'>
                                            <li className='mb-3'>
                                                <a href='/' className='block font-semibold p-[3px] px-20 hover:bg-gray-300 '>LOUIS VUITTON</a>
                                            </li>
                                            <li className='mb-3'>
                                                <a href='/' className='block font-semibold p-[3px] px-20 hover:bg-gray-300 '>NBA</a>
                                            </li>
                                            <li className='mb-3'>
                                                <a href='/' className='block font-semibold p-[3px] px-20 hover:bg-gray-300 '>Hoodie</a>
                                            </li>
                                            <li className='mb-3'>
                                                <a href='/' className='block font-semibold p-[3px] px-20 hover:bg-gray-300 '>Pants</a>
                                            </li>
                                            <li className='mb-3'>
                                                <a href='/' className='block font-semibold p-[3px] px-20 hover:bg-gray-300 '>Bearbricks</a>
                                            </li>
                                            <li className='mb-3'>
                                                <a href='/' className='block font-semibold p-[3px] px-20 hover:bg-gray-300 '>AIR FORCE</a>
                                            </li>
                                            <li className='mb-3'>
                                                <a href='/' className='block font-semibold p-[3px] px-20 hover:bg-gray-300 '>Fuld Mayor bag</a>
                                            </li>
                                            <li className='mb-3'>
                                                <a href='/' className='block font-semibold p-[3px] px-20 hover:bg-gray-300 '>UN WATCH</a>
                                            </li>
                                        </ul>
                                        <ul className='bg-[#f1f1f1] pb-7 pt-6'>
                                            <li className='mb-3'>
                                                <a href='/' className='block font-semibold p-[3px] px-20 hover:bg-gray-300 '>SRGN</a>
                                            </li>
                                            <li className='mb-3'>
                                                <a href='/' className='block font-semibold p-[3px] px-20 hover:bg-gray-300 '>DIADORA</a>
                                            </li>

                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <div className='group py-7'>
                                <Link to="/shop" className='inline-flex items-center text-sm relative px-2 py-[3px] font-normal text-gray-600 group-hover:text-black '>
                                    <span className='text-xl '>Shop</span>
                                </Link>
                            </div>
                            <div className='group py-7'>
                                <Link to="/faq" className='inline-flex items-center text-sm relative px-2 py-[3px] font-normal text-gray-600 group-hover:text-black '>
                                    <span className='text-xl '>FAQ</span>
                                </Link>
                            </div>

                        </div>

                    </nav>


                    <div className='hidden md:flex items-center absolute right-10  space-x-7'>

                        <div className='flex space-x-7 z-50 items-center justify-center' >
                            <div className=' z-[999]'>
                                <Model />
                            </div>

                            <div className='-mt-2'>
                                <SignIn />
                            </div>

                            <div>

                                <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-black  focus:outline-none focus:ring-0 dark:bg-none  dark:focus:ring-0" onClick={drawweOpen}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 20 20" className="md:w-4 xl:w-5 md:h-4 xl:h-5"><path d="M5,4H19a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4ZM2,5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3V19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3Zm10,7C9.239,12,7,9.314,7,6H9c0,2.566,1.669,4,3,4s3-1.434,3-4h2C17,9.314,14.761,12,12,12Z" transform="translate(-2 -2)" fill="currentColor" fillRule="evenodd"></path></svg>
                                    <span className="sr-only">Notifications</span>
                                    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-black border-2 border-white rounded-full -top-[0.1rem] -right-[0.2rem] dark:border-gray-900" >{cardProduct?.length}</div>
                                </button>

                            </div>

                            <div>
                            </div>
                        </div>
                    </div>


                </div>
            </header>


            <MobileNavbar />


            <Drawer
                title={title}
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'

            >
                <div >
                    <div className={cardProduct?.length !== 0 ? "hidden" : "block"}>
                        <div className='flex flex-col w-full h-full items-center px-1  pb-5'>
                            <svg width="230" style={{ width: "368px", height: "400px" }} height="309.722" viewBox="0 0 180 309.722"><g id="no_cart_in_bag" data-name="no cart in bag" transform="translate(-988 -7673)"><g id="no_cart" data-name="no cart" transform="translate(988 7673)"><g id="Group_5970" data-name="Group 5970" transform="translate(0 0)"><g id="Group_5967" data-name="Group 5967" transform="translate(17.408 92.119)"><path id="Path_17743" data-name="Path 17743" d="M405.506,794.581l63.621-36.762L418.2,724.274Z" transform="translate(-323.428 -576.978)" fill="#ba8064"></path><path id="Path_17744" data-name="Path 17744" d="M135.711,140.727l32.918-.12,1.287-20.225,79.451,45.843-34.42,1.084v19.165Z" transform="translate(-118.988 -119.373)" fill="#dba480"></path><path id="Path_17745" data-name="Path 17745" d="M314.4,206.341,272,124.761l-2.279,22.008,1.4,59.572Z" transform="translate(-220.537 -122.691)" fill="#460100" opacity="0.1"></path><path id="Path_17746" data-name="Path 17746" d="M141.237,253.056l-10.26-47.388,34.59-.126v37.243Z" transform="translate(-115.402 -183.904)" fill="#995b47"></path><path id="Path_17747" data-name="Path 17747" d="M511.029,445.295l-49.136-22.179L460.8,385.489l1.089-72.515,35.954-1.133Z" transform="translate(-365.33 -264.454)" fill="#a96e56"></path><path id="Path_17748" data-name="Path 17748" d="M148.755,398.756l9.58-70.307,4.9-79.149L81.161,201.911,66.677,351.368Z" transform="translate(-66.677 -181.153)" fill="#dba480"></path><path id="Path_17749" data-name="Path 17749" d="M349.459,429.379c-.415,1.942-2.182,2.6-3.948,1.46a5.753,5.753,0,0,1-2.446-5.572c.414-1.942,2.182-2.6,3.948-1.46A5.753,5.753,0,0,1,349.459,429.379Z" transform="translate(-276.046 -348.874)" fill="#67251d"></path><path id="Path_17750" data-name="Path 17750" d="M209.819,348.753c-.415,1.942-2.182,2.6-3.948,1.46a5.753,5.753,0,0,1-2.446-5.572c.415-1.942,2.182-2.6,3.948-1.46A5.753,5.753,0,0,1,209.819,348.753Z" transform="translate(-170.233 -287.779)" fill="#67251d"></path><g id="Group_5965" data-name="Group 5965" transform="translate(31.503 60.166)" opacity="0.2"><path id="Path_17751" data-name="Path 17751" d="M219.35,441.507a16.861,16.861,0,0,1-8.439-2.272A28.35,28.35,0,0,1,196.858,412l4.383-45.226a2.414,2.414,0,0,1,4.806.467l-4.383,45.226a23.483,23.483,0,0,0,11.608,22.554,12.055,12.055,0,0,0,18.081-9.247l3.819-39.41a2.414,2.414,0,0,1,4.806.467l-3.819,39.41a16.912,16.912,0,0,1-16.809,15.266Z" transform="translate(-196.727 -364.591)" fill="#460100"></path></g><path id="Path_17752" data-name="Path 17752" d="M162.373,116.218,161.06,136.85l-34.59.126,82.078,47.388V164.738l35.954-1.132Zm44.968,47.351v18.7l-76.395-44.106,31.247-.113,1.261-19.819,76.774,44.3Z" transform="translate(-111.986 -116.218)" fill="#fcc89d"></path><g id="Group_5966" data-name="Group 5966" transform="translate(29.24 57.45)"><path id="Path_17753" data-name="Path 17753" d="M210.007,430.3a16.864,16.864,0,0,1-8.438-2.271,28.35,28.35,0,0,1-14.054-27.235l4.383-45.226a2.414,2.414,0,0,1,4.806.467l-4.383,45.226a23.483,23.483,0,0,0,11.608,22.554,12.055,12.055,0,0,0,18.081-9.247l3.819-39.41a2.414,2.414,0,0,1,4.806.467l-3.819,39.41A16.912,16.912,0,0,1,210.007,430.3Z" transform="translate(-187.384 -353.38)" fill="#995b47"></path></g><path id="Path_17754" data-name="Path 17754" d="M405.506,546.991,419.99,488.05V397.534Z" transform="translate(-323.428 -329.388)" fill="#995b47"></path></g><g id="Group_5968" data-name="Group 5968" transform="translate(0 0)"><path id="Path_17755" data-name="Path 17755" d="M394.573,120.6c-.142-.5.244-.855.5-1.088a1.4,1.4,0,0,0,.271-.293,0,0,0,0,0,0,0,1.39,1.39,0,0,0-.384-.107c-.34-.065-.853-.162-1-.665s.244-.855.5-1.088a1.39,1.39,0,0,0,.271-.293,0,0,0,0,0,0,0,1.4,1.4,0,0,0-.384-.107c-.34-.064-.853-.162-1-.664s.244-.855.5-1.088l.009-.008a.9.9,0,0,0,.259-.482.391.391,0,0,1,.276-.292.41.41,0,0,1,.5.316,1.122,1.122,0,0,1-.51,1.046,1.4,1.4,0,0,0-.271.292,0,0,0,0,0,0,0,1.4,1.4,0,0,0,.384.107c.34.065.853.162,1,.665s-.244.855-.5,1.088a1.4,1.4,0,0,0-.271.293,0,0,0,0,0,0,0,1.391,1.391,0,0,0,.384.107c.34.065.853.162,1,.665s-.244.855-.5,1.088a1.257,1.257,0,0,0-.273.3,0,0,0,0,0,0,0,1.641,1.641,0,0,0,.387.1c.331.063.826.157.983.625a.416.416,0,0,1-.21.507.392.392,0,0,1-.456-.109.789.789,0,0,0-.464-.253h0C395.229,121.2,394.716,121.1,394.573,120.6Z" transform="translate(-349.075 -37.518)" fill="#212121" opacity="0.3"></path><path id="Path_17765" data-name="Path 17765" d="M395.468,120.6c.142-.5-.244-.855-.5-1.088a1.4,1.4,0,0,1-.271-.293,0,0,0,0,1,0,0,1.39,1.39,0,0,1,.384-.107c.34-.065.853-.162,1-.665s-.244-.855-.5-1.088a1.389,1.389,0,0,1-.271-.293,0,0,0,0,1,0,0,1.4,1.4,0,0,1,.384-.107c.34-.064.853-.162,1-.664s-.244-.855-.5-1.088l-.009-.008a.9.9,0,0,1-.259-.482.391.391,0,0,0-.276-.292.41.41,0,0,0-.5.316,1.122,1.122,0,0,0,.51,1.046,1.4,1.4,0,0,1,.271.292,0,0,0,0,1,0,0,1.4,1.4,0,0,1-.384.107c-.34.065-.853.162-1,.664s.244.855.5,1.088a1.4,1.4,0,0,1,.271.293,0,0,0,0,1,0,0,1.39,1.39,0,0,1-.384.107c-.34.065-.853.162-1,.665s.244.855.5,1.088a1.257,1.257,0,0,1,.273.3,0,0,0,0,1,0,0,1.641,1.641,0,0,1-.387.1c-.331.063-.826.157-.983.625a.416.416,0,0,0,.21.507.392.392,0,0,0,.456-.109.789.789,0,0,1,.464-.253h0C394.812,121.2,395.326,121.1,395.468,120.6Z" transform="translate(-262.76 -23.736)" fill="#212121" opacity="0.3"></path><path id="Path_17756" data-name="Path 17756" d="M375.447,179.277a2.539,2.539,0,1,1,3.346,1.3A2.542,2.542,0,0,1,375.447,179.277Zm3.737-1.643a1.543,1.543,0,1,0-.791,2.034A1.545,1.545,0,0,0,379.184,177.634Z" transform="translate(-375.232 -52.408)" fill="#212121" opacity="0.3"></path><path id="Path_17764" data-name="Path 17764" d="M375.447,179.277a2.539,2.539,0,1,1,3.346,1.3A2.542,2.542,0,0,1,375.447,179.277Zm3.737-1.643a1.543,1.543,0,1,0-.791,2.034A1.545,1.545,0,0,0,379.184,177.634Z" transform="translate(-333.888 -175.716)" fill="#212121" opacity="0.3"></path><path id="Path_17757" data-name="Path 17757" d="M350.086,264.8a1.852,1.852,0,0,1-2.682-2.547l-.868-.823a3.047,3.047,0,0,0,4.417,4.194Z" transform="translate(-253.642 -206.302)" fill="#212121" opacity="0.3"></path><path id="Path_17766" data-name="Path 17766" d="M346.628,264.8a1.852,1.852,0,0,0,2.682-2.547l.867-.823a3.047,3.047,0,0,1-4.417,4.194Z" transform="translate(-170.953 -110.557)" fill="#212121" opacity="0.15"></path><path id="Union_11" data-name="Union 11" d="M2.059,6.97l.989-3.048L0,2.933.283,2.06l3.049.989L4.321,0,5.2.284l-.99,3.048,3.047.989L6.97,5.2l-3.048-.99-.99,3.049Z" transform="translate(6.528 48.598)" fill="#212121" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" strokeWidth="1" opacity="0.3"></path><path id="Union_13" data-name="Union 13" d="M2.059,6.97l.989-3.048L0,2.933.283,2.06l3.049.989L4.321,0,5.2.284l-.99,3.048,3.047.989L6.97,5.2l-3.048-.99-.99,3.049Z" transform="translate(94.294 121.132)" fill="#212121" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" strokeWidth="1" opacity="0.3"></path><path id="Union_12" data-name="Union 12" d="M1.235,4.182l.593-1.829L0,1.759l.17-.524L2,1.829,2.592,0l.525.17L2.523,2l1.828.594-.17.523L2.353,2.523,1.759,4.352Z" transform="translate(107.351 6.528)" fill="#212121" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" strokeWidth="1" opacity="0.3"></path></g></g></g></g></svg>
                            <h3 className='text-lg pt-5 font-bold'>Your cart is empty.</h3>
                        </div>
                    </div>

                    <div className={cardProduct?.length !== 0 ? "block h-[30rem]  overflow-y-scroll" : "hidden"}>

                        {
                            cardProduct?.map((items, index) => (
                                <div className='flex  justify-between items-center mt-12'>
                                    <div className='group cursor-pointer relative' key={index}>
                                        <img src={items.Product?.url} alt="" className='w-[160px] h-28' />
                                        <div className='absolute top-0 bg-[#00000036] box-border h-full w-full left-[-190%] group-hover:left-0  flex items-center justify-center text-w transition  duration-[5000ms] ease-in-out rounded-lg' onClick={() => { remove(index) }}>
                                            <AiOutlineClose className='text-white text-[20px]' />
                                        </div>
                                    </div>

                                    <div className='ml-2'>
                                        <p className='h-[20px] overflow-hidden'>{items.Product?.title} </p>
                                        <p className='mt-1 text-gray-400'>Unit Price: {items.Product?.price}</p>

                                        <div className="flex bg-black text-white font-bold text-lg mt-5 h-10 rounded-md">
                                            <button className='flex justify-center items-center w-9 lg:w-12 border-e border-gray-400 cursor-pointer' onClick={() => { sub(index, items) }}>-</button>
                                            <button className='w-20'> {items.quatity}</button>
                                            <button className='flex justify-center  items-center lg:w-12 w-9 border-s border-gray-400' onClick={() => { add(index, items) }}>+</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <button className='flex w-full  flex-col pt-2 pb-2'>
                        <div className='w-full bg-[#000] text-white hover:text-white rounded-md cursor-not-allowed px-2 py-3 flex items-center justify-center '>
                            <span className='w-ful pe-5 md:text-[17px] font-semibold'>Proceed to Checkout</span>
                            <span className='mx-auto md:text-[17px] font-semibold '>| {cardProduct?.length !== 0 ? price : "SAR 0.00"}</span>
                        </div>
                    </button>
                </div>
            </Drawer>
        </>
    )
}

export default Navbar
