import React from 'react'
import { Link } from 'react-router-dom'
import SideBar from './SideBar'

const Dashboard = () => {
    return (
        <div className='mt-6 lg:mx-5 md:grid grid-cols-12 flex flex-col'>
           <div className='col-span-4'>
           <SideBar />
           </div>

            <div class="lg:p-4 w-full  h-96 mt-5 col-span-8">
                <div className='mx-6'>
                    <h1 className='text-2xl font-bold'>Dashboard</h1>

                    <div className='mt-3'>
                        <span className='space-x-1'>from your account dashboard you can view your
                            <span className='mx-1'><Link to="/" className='underline font-bold'>recent orders</Link>
                            </span>
                            <span>manage your</span>
                            <span> <Link to="/" className='underline font-bold'>account details</Link> </span>
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard
