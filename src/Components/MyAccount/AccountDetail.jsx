import React from 'react'
import SideBar from './SideBar'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


const AccountDetail = () => {
  let userData = JSON.parse(localStorage.getItem("userData"))
  // console.log(userData);
  let token = localStorage.getItem("Token")
  const [firstName, setFirstName] = useState(userData.first_name)
  const [lastLame, setLastName] = useState(userData.last_name)
  const [mobileNo, setMobuile] = useState(userData.mobile)
  const [emailADD, setEmail] = useState(userData.email)


  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastName = (e) => {
    setLastName(e.target.value)
  }

  const handleMobile = (e) => {
    setMobuile(e.target.value)
  }


  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const updateFormValue = () => {
    let formValue = {
      first_name: firstName,
      last_name: lastLame,
      email: emailADD, 
      type: "customer",
      mobile: mobileNo,
    }

    axios({
      method: "PUT",
      url: `https://pos-dev.myignite.online/connector/api/contactapi/${userData.id}`,
      data: JSON.stringify(formValue),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        toast.success("Update Successfully")
        localStorage.setItem("userData", JSON.stringify(response.data.data))
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  }


  return (
    <div className='lg:grid grid-cols-12 flex flex-col lg:mx-5 mx-3 mt-6'>
      <div className='col-span-4'>
        <SideBar />
      </div>

      <div className='col-span-8 mt-6 mx-3'>
        <div className='lg:grid grid-cols-2 gap-5 '>
          <div className="">
            <p className='font-semibold'>First Name *</p>
            <input type="text" value={firstName} onChange={handleFirstName} className='w-full my-4 ' />
          </div>
          <div className="">
            <p className='font-semibold'>Last Name *</p>
            <input type="text" value={lastLame} onChange={handleLastName} className='w-full my-4 ' />
          </div>
          <div className="">
            <p className='font-semibold'>Phone/Mobile *</p>
            <input type="tel" value={mobileNo} onChange={handleMobile} className='w-full my-4 ' />
          </div>
          <div className="">
            <p className='font-semibold'>Email *</p>
            <input type="email" value={emailADD} onChange={handleEmail} className='w-full my-4 ' />
          </div>
        </div>

        <button className='bg-green-900 text-white font-bold py-2 w-32 rounded-md' onClick={updateFormValue}>Update</button>
      </div>


    </div>
  )
}

export default AccountDetail
