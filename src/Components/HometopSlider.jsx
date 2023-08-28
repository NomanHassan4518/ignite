import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { sliderData } from './Data';

const HometopSlider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1023, min: 768 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 767, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const autoPlaySpeed = 2000

let categories =  JSON.parse( localStorage.getItem('Categories'))

  return (
    <div className='mt-6 lg:mx-4 grid grid-cols-1 z-10 mb-12 overflow-hidden  gap-1'>
      <Carousel responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={autoPlaySpeed}
      >
        {
          categories.map((item , index) => (
            <div className='mx-6'key={index}>
            <a className="flex justify-between h-[5rem] items-center bg-gray-100 rounded-md px-5 py-3 hover:bg-gray-200" href='/'>
              <div className="flex items-center">
                <span>

                  <img src={item.image===null ?"https://apna.ignitehq.vercel.app/_next/image?url=%2Ficons%2Fignite-default.png&w=64&q=75":item.image} alt="" className='rounded-full bg-gray-300 w-16 h-16' />

                </span>
                <h3 className='mx-6 capitalize '>{item.name}</h3>
              </div>
            </a>

          </div>
          ))
        }

      </Carousel>
    </div>
  )
}

export default HometopSlider
