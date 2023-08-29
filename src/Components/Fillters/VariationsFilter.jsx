import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import Spinner from '../Spinner';

const VariationsFilter = () => {
  let token = localStorage.getItem("Token");
  const { data, isFetching } = useQuery({
    queryKey: ["Variations"],
    queryFn: () =>
      axios
        .get("http://pos-dev.myignite.online/connector/api/get_variations", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => res.data),
  }
  )

  if (isFetching) {
    return <Spinner />
  }



  return (
    <div>
      <div className=" border-b-[1px] border-gray-300 mb-7 pb-7">
     
 
            <div>
              <h3 className='text-lg mb-7 font-semibold'>{data[0].name}</h3>
              <div className="mt-2">
                <div className="grid grid-cols-3 gap-3">

                    {
                    data[0].values.map((value, index) => (
                      <div key={index}>
                        <span className='cursor-pointer inline-flex justify-center items-center border rounded border-gray-300 p-2 mb-2 transition duration-200 ease-in-out text-sm uppercase font-semibold w-full hover:border-black' >
                          <button  className='uppercase '>{value.name}</button>
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
