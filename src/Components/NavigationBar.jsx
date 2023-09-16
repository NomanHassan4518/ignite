
import React, { useState } from 'react';
import { Drawer } from 'antd';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const [className, setClassName] = useState(false)

    let category = JSON.parse(localStorage.getItem('Categories'))
    let img = <img src='https://un.myignite.site/_next/image?url=https%3A%2F%2Fignitestorage.blob.core.windows.net%2Figniteadmin-prod%2Fuploads%2Fbusiness_logos%2F1673962751_ezgif.com-gif-maker.png&w=64&q=75' alt="" className='flex  justify-between'></img>

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
                            <Link onClick={()=>setIsOpen(false)} to='/ignite' className='text-xl text-gray-700'>Home
                            </Link>

                        </li>

                        <li >
                            <div className='w-full flex justify-between mb-3'>
                                <Link onClick={()=>setIsOpen(false)} to='/shop' className='text-xl text-gray-700'>Categories
                                </Link>
                                <span className='mt-3' onClick={() => setClassName(!className)}>  <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                                </svg></span>
                            </div>

                            {
                                className ?
                                    <ul>
                                        {
                                            category.map((item) => (
                                                <li className='mb-3'>
                                                    <Link onClick={()=>setIsOpen(false)}  to='/' className='block font-semibold py-[3px] px-20 hover:bg-gray-300 '>{item.name}</Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    : null
                            }

                        </li>

                        <li>
                            <Link onClick={()=>setIsOpen(false)} to='/shop' className='text-xl text-gray-700'>Shop</Link>
                        </li>

                        <li>
                            <Link onClick={()=>setIsOpen(false)} to='/faq' className='text-xl text-gray-700'>FAQ</Link>
                        </li>
                    </ul>
                </div>
            </Drawer>
        </>
    );
};



export default NavigationBar
