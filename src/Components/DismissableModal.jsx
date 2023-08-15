import React from 'react';
import Modal from 'react-modal';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';
import "../App.css";
import OtpInput from 'react-otp-input';
import {  toast } from 'react-toastify';

const customStyles = {
    content: {
        position: "absolute",
        width: "35%",
        top: '50%',
        left: '45%',
        right: 'auto',
        bottom: 'auto',
        margin: "auto",
        marginRight: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: "-1",
        border: "none"
    },
};

const Model = () => {
    const [value, setValue] = useState("")
    const [otp, setOtp] = useState('');
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [otpClass, setOtpClass] = useState("hidden");

    const otpBox = () => {

        if (value.length === 0) {
            // setOtpClass("hidden")
            toast.error('Invalid Mobile No:');
        }

        else {
            setOtpClass("block")
            toast.success('OTP Sent on Your Mobile No:', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                zIndex:999
            });
        }
    }

    function openModal() {
        setIsOpen(true);

    }

    function closeModal() {
        setIsOpen(false);
        setOtpClass("hidden")
        setValue("")
    }

    return (
        <>

            <div >

                <button onClick={openModal}>
                    <div className='flex'>
                        <span className='font-semibold text-[20px]'  >Sign In</span>

                    </div>
                </button>

                <Modal

                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    overlayClassName="Overlay2"

                >

                    <div className="flex ffsae flex-col space-y-3 content-center px-4 pb-2 border-0 bg-transparent justify-center  rounded-lg  border-gray-400 ">

                        <h1 className='text-3xl font-bold text-[#626161] text-center my-6 '>SignIn/SignUp</h1>
                        <p className=''>Phone Number</p>

                        <div>
                            <PhoneInput

                                international
                                defaultCountry="PK"
                                value={value}
                                onChange={setValue}
                            />

                            <div className={otpClass}>
                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={4}
                                    renderSeparator={<span>-</span>}
                                    renderInput={(props) => <input  {...props}
                                        style={{
                                            width: "3.5rem"
                                        }} />
                                    }
                                />
                            </div>

                        </div>


                        <div className='relative'>
                            <button className="bg-[#3e3d3d]   text-white  text-[13px] ml-4  leading-4 inline-flex items-center justify-center font-bold rounded-md bg-heading w-full py-4 px-5 h-11 mt-5" onClick={otpBox}>Next
                            </button>
                        </div>

                    </div>
                </Modal>

            

            </div>

        </>
    )
}



export default Model
