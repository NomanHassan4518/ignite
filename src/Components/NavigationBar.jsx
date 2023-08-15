
import React, { useState } from 'react';
import { Drawer } from 'antd';

const NavigationBar = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const [className, setClassName] = useState(false)



    let img = <h1 className='text-center satisfy  text-[24px] font-bold'>UN</h1>

    return (
        <>
            <button onClick={toggleDrawer}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 25.567 18"><g transform="translate(-776 -462)"><rect id="Rectangle_941" data-name="Rectangle 941" width="12.749" height="2.499" rx="1.25" transform="translate(776 462)" fill="currentColor"></rect><rect id="Rectangle_942" data-name="Rectangle 942" width="25.567" height="2.499" rx="1.25" transform="translate(776 469.75)" fill="currentColor"></rect><rect id="Rectangle_943" data-name="Rectangle 943" width="17.972" height="2.499" rx="1.25" transform="translate(776 477.501)" fill="currentColor"></rect></g></svg>
            </button>



            <Drawer
                title={img}
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='bla bla bla'
            >
                <div className='mt-6  overflow-scroll'>
                    <ul className='space-y-4'>
                        <li>
                            <a href='/' className='text-xl text-gray-700'>Hom

                            </a>

                        </li>

                        <li >
                            <div className='w-full flex justify-between mb-3'>
                                <a href='/shop' className='text-xl text-gray-700'>Categories
                                </a>
                                <span className='mt-3' onClick={() => setClassName(!className)}>  <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                                </svg></span>
                            </div>

                            {
                                className ?
                                    <ul>
                                        <li className='mb-3'>
                                            <a href='/' className='block text-lg text-gray-400 py-[3px] px-2 hover:bg-gray-300 '>New Balance</a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='/' className='block text-lg text-gray-400 py-[3px] px-2 hover:bg-gray-300 '>Air Jordan</a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='/' className='block text-lg text-gray-400 py-[3px] px-2 hover:bg-gray-300 '>Adidas</a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='/' className='block text-lg text-gray-400 py-[3px] px-2 hover:bg-gray-300 '>Nike</a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='/' className='block text-lg text-gray-400 py-[3px] px-2 hover:bg-gray-300 '>Puma</a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='/' className='block text-lg text-gray-400 py-[3px] px-2 hover:bg-gray-300 '>Reebok</a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='/' className='block text-lg text-gray-400 py-[3px] px-2 hover:bg-gray-300 '>Asics</a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='/' className='block text-lg text-gray-400 py-[3px] px-2 hover:bg-gray-300 '>Under Armour</a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='/' className='block text-lg text-gray-400 py-[3px] px-2 hover:bg-gray-300 '>Fila</a>
                                        </li>

                                        <li className='mb-3'>
                                            <a href='/' className='block text-lg text-gray-400 p-[3px] px-2 hover:bg-gray-300 '>Marc Jacobs</a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='/' className='block text-lg text-gray-400 p-[3px] px-2 hover:bg-gray-300 '>Timberland</a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='/' className='block text-lg text-gray-400 p-[3px] px-2 hover:bg-gray-300 '>Converse</a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='/' className='block text-lg text-gray-400 p-[3px] px-2 hover:bg-gray-300 '>Sperry</a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='/' className='block text-lg text-gray-400 p-[3px] px-2 hover:bg-gray-300 '>Vans</a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='/' className='block text-lg text-gray-400 p-[3px] px-2 hover:bg-gray-300 '>Yeezy</a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='/' className='block text-lg text-gray-400 p-[3px] px-2 hover:bg-gray-300 '>Zero Lo</a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='/' className='block text-lg text-gray-400 p-[3px] px-2 hover:bg-gray-300 '>SRGN Custom</a>
                                        </li>

                                        <li className='mb-3'>
                                            <a href='/' className='block text-lg text-gray-400 p-[3px] px-2 hover:bg-gray-300 '>LOUIS VUITTON</a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='/' className='block text-lg text-gray-400 p-[3px] px-2 hover:bg-gray-300 '>NBA</a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='/' className='block text-lg text-gray-400 p-[3px] px-2 hover:bg-gray-300 '>Hoodie</a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='/' className='block text-lg text-gray-400 p-[3px] px-2 hover:bg-gray-300 '>Pants</a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='/' className='block text-lg text-gray-400 p-[3px] px-2 hover:bg-gray-300 '>Bearbricks</a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='/' className='block text-lg text-gray-400 p-[3px] px-2 hover:bg-gray-300 '>AIR FORCE</a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='/' className='block text-lg text-gray-400 p-[3px] px-2 hover:bg-gray-300 '>Fuld Mayor bag</a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='/' className='block text-lg text-gray-400 p-[3px] px-2 hover:bg-gray-300 '>UN WATCH</a>
                                        </li>

                                        <li className='mb-3'>
                                            <a href='/' className='block text-lg text-gray-400 p-[3px] px-2 hover:bg-gray-300 '>SRGN</a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href='/' className='block text-lg text-gray-400 p-[3px] px-2 hover:bg-gray-300 '>DIADORA</a>
                                        </li>
                                    </ul>
                                    : null
                            }

                        </li>
                        <li>
                            <a href='/shop' className='text-xl text-gray-700'>Shop</a>
                        </li>
                        <li>
                            <a href='/faq' className='text-xl text-gray-700'>FAQ</a>
                        </li>
                    </ul>
                </div>
            </Drawer>
        </>
    );
};



export default NavigationBar
