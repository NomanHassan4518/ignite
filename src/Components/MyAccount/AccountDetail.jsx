import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Spinner from '../Spinner'
import SideBar from './SideBar'

const AccountDetail = () => {


  return (
    <div className='grid grid-cols-12'>
<div className='col-span-4'>
    <SideBar/>
</div>

<div className='col-span-8'>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi aspernatur dolores, sed aliquid impedit praesentium. Cupiditate animi dicta, quaerat laudantium sunt asperiores laborum ullam qui at commodi magni! Nisi perferendis fuga saepe? Quisquam culpa, molestias tempore architecto quas non?
</div>
    </div>
  )
}

export default AccountDetail
