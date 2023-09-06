import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import Spinner from '../Spinner';
// import { useDispatch } from 'react-redux';
// import { filterBySize } from '../../Services/Action/Action';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const VariationsFilter = () => {
  let navigate = useNavigate()
  let token = localStorage.getItem("Token");
  const [ variation ,setVariation]=useState([])
  // let dispatch = useDispatch()
  const { data:variationData, isFetching } = useQuery({
    queryKey: ["Variations"],
    queryFn: () =>
      axios
        .get("https://pos-dev.myignite.online/connector/api/get_variations", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => res.data),
  }
  )

  if(isFetching){
    return (
      <Spinner/>
    )
  }



  const handleClick = (value) => {

let isValue =variation.includes(value)


if(isValue===false){
  let updateVariation = [...variation , value]
  
  setVariation(updateVariation)

  let a = updateVariation.map((i)=>{
    return i
  })
  
  navigate(`/shop?variation=${a}` , {state:{updateVariation}} )
 
} 


// else if(isValue===true){
//   setVariation(
//     variation.filter((i)=> i!==value)
//   )
// }

console.log(variationData);

    
  }
  return (
    <div>
      <div className=" border-b-[1px] border-gray-300 mb-7 pb-7">
        <div>
          <h3 className='text-lg mb-7 font-semibold'>{variationData[0].name}</h3>
          <div className="mt-2">
            <div className="grid grid-cols-3 gap-3">
              {
                variationData[0].values.map((value, index) => (
                  <div key={index} onClick={() => handleClick(value.name)}>
                    <span className='cursor-pointer inline-flex justify-center items-center border rounded border-gray-300 p-2 mb-2 transition duration-200 ease-in-out text-sm uppercase font-semibold w-full hover:border-black' >
                      <button className='uppercase' >{value.name}</button>
                    </span>
                  </div>
                ))
              }
            </div>
          </div>
        </div>



      </div>

    </div>
  )
}

export default VariationsFilter
