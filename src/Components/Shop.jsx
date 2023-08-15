import React from 'react'
import SideBar from './SideBar'
import RightSide from './RightSide'

const Shop = () => {
  return (
    <div className='pt-8 lg:px-10 px-2 '>
    <div className='flex'>
       <div className='hidden lg:block'>
        <SideBar/>
       </div>

        <div className=''>
          <RightSide/>
        </div>

        
    </div>

 
</div>
  )
}

export default Shop
