import React from 'react'
import { topBrand } from './Data'
import Carousel from 'react-multi-carousel'

const TopBrand = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 3000, min: 1440 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 1440, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    };



    const autoPlaySpeed = 2000
    return (
        <div className='mt-12 mx-4 mb-12'>
            <div>
                <h3 className='font-bold text-2xl mx-8 lg:mb-4'>Top Brand</h3>
            </div>

            <div className="grid grid-cols-1">
                <Carousel responsive={responsive}
                    infinite
                    autoPlay
                    autoPlaySpeed={autoPlaySpeed}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    {
                        topBrand.map((a) => (
                            <a href='/' className='flex flex-col items-center mt-9 lg:h-[18rem] justify-center '>
                                <span className='sm:w-[191px] w-[50px] h-50px rounded-md'>
                                    <img src={a.url} alt="" />
                                </span>

                                <span className='flex flex-col mt-[1rem] items-end justify-center'>
                                    <p className='text-xs sm:text-xl font-semibold mb-3'>{a.title}</p>
                                </span>
                            </a>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default TopBrand
