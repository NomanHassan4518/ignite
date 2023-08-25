import React from 'react'
import DeliveryOption from './DeliveryOption'
import Order from './Order'

const CheckOut = () => {
    return (
        <div className='px-14 py-12 w-full mx-auto grid grid-cols-12'>
            <div className='col-span-7'>
                <DeliveryOption />
            </div>
            <div className="col-span-5 ">
                <Order />
            </div>
        </div>
    )
}

export default CheckOut
