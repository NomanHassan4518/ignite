import React from 'react'
import VariationFilter from './Fillters/VariationsFilter'
import CategoryFilter from './Fillters/CategoryFilter'
import BrandFilter from './Fillters/BrandFilter'
import PriceFilter from './Fillters/PriceFilter'
import Header from './Fillters/Header'
const SideBar = () => {
    return (
        <div className='w-96  flex-shrink-0 pe-24'>
         <div>
            <Header/>
         </div>

        <div>
            <VariationFilter/>
        </div>
       

          <div>
            <CategoryFilter/>
          </div>

            <div>
                <BrandFilter/>
            </div>
  
          <div>
            <PriceFilter/>
          </div>
        </div>
    )
}

export default SideBar
