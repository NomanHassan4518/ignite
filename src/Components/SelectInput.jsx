
import React from 'react';
import { Label, Select } from 'flowbite-react';


const SelectInput = () => {

    return (
        <>
        <div
            className="max-w-md flex items-center justify-center"
            id="select"
        >
            <div className="mb-2 block">
                <Label
                    htmlFor="countries"
                />
            </div>
            <Select
                id="countries"
                required
                className='font-semibold '
            >

                <option  className='text-lg'>
                    عربی
                </option>
                <option selected className='text-lg' style={{backgroundImage:""}}>
                   English-EN
                </option>
                <option className='text-lg'>
                    اردو
                </option>

            </Select>

        </div>
</>
    
    )
}

export default SelectInput
