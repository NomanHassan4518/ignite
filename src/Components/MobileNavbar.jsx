import React from 'react'
import NavigationBar from './NavigationBar'
import MobileSearchBar from './MobileSearchBar'
import MobileHome from './MobileHome'
import MobileShopingCart from './MobileShopingCart'
import MobileSignIn from './MobileSignIn'

const MobileNavbar = () => {
    return (
        <>
            <div className='w-full flex justify-around items-center bg-white fixed bottom-0 z-50 md:hidden h-14 sm:h-16 text-gray-700'>

                <div>
                    <NavigationBar />
                </div>



                <div>
                   <MobileSearchBar/>
                </div>

                <div>
                    <MobileHome/>
                </div>


                <div>

                  <MobileShopingCart/>

                </div>


                <div>
               <MobileSignIn/>
                </div>

            </div>
        </>
    )
}

export default MobileNavbar
