import React from 'react'
import SideBar from './SideBar'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Spinner from '../Spinner'
import { useNavigate } from 'react-router-dom'

const AccountOrder = () => {
  let token = localStorage.getItem("Token")
  let user = localStorage.getItem("User")
  let navigate = useNavigate()


  const { data: ordersData, isFetching } = useQuery({
    queryKey: ["OrderDetail"],
    queryFn: () =>
      axios
        .get(`https://pos-dev.myignite.online/connector/api/sell?${user}&page=-1&order_by_date=desc`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => res.data),
  }
  )


  if (isFetching) {
    return (
      <Spinner />
    )
  }

  const ordersDetail = (item) => {
    navigate(`/my-account/orders/${item.id}`, { state: {item} })
  }




  return (
    <div className='mt-6 mx-5 mb-16 grid grid-cols-12'>
      <div className='col-span-4'>
        <SideBar />
      </div>

      <div className='col-span-8 '>
        <h1 className='text-2xl mb-2 font-bold'>Orders</h1>

        <div class="relative shadow-md rounded-lg">
          <table class="w-full text-md text-left  text-gray-500 dark:text-gray-400">
            <thead class="text-md text-gray-700  uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Order
                </th>
                <th scope="col" class="px-6 py-3">
                  Date
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
                <th scope="col" class="px-6 py-3">
                  Total
                </th>
                <th scope="col" class="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className='animated-table'>
              {
                ordersData.data.map((item, index) => (
                  <tr className='text-gray-700 text-lg' key={index}>
                    <td className='px-6 py-3 underline cursor-pointer'>
                      {item.invoice_no}
                    </td>
                    <td className='px-6 py-3'>
                      {item.transaction_date}
                    </td>
                    <td className='px-6 py-3'>
                      {item.shipping_status}
                    </td>
                    <td className='px-6 py-3'>
                      SAR {parseFloat(item.total_before_tax) + parseFloat(item.tax_amount)}
                    </td>
                    <td className='px-6 py-3'>
                      <button className='w-16 h-10 bg-green-950 text-white rounded-md  text-lg' onClick={() => ordersDetail(item)}>View</button>
                    </td>
                  </tr>
                ))
              }


            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default AccountOrder
