import React from 'react'
import { Link } from 'react-router-dom'
import SideBar from './SideBar'

const Dashboard = () => {
    return (
        <div className='mt-6 mx-5'>
            <SideBar />

            <div class="p-4 lg:ml-96 sm:ml-64 h-96">
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
