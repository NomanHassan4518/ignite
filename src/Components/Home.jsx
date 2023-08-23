import React from 'react'
import HometopSlider from './HometopSlider'
import TopProduct from './TopProduct'
import TopBrand from './TopBrand'


const Home = () => {



  return (
    <>
      <div className='mt-[1rem]'>
        <HometopSlider/>
      </div>

      <div>
        <TopProduct  />
      </div>

      <div className=''><TopBrand /></div>

    </>

  )
}

export default Home
