import React from 'react';
import Modal from 'react-modal';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import "../App.css";
import OtpInput from 'react-otp-input';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const customStyles = {
    content: {
        position: "absolute",
        width: "90%",
        top: '50%',
        left: '50%',
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
            setOtpClass("hidden")
            toast.error('Invalid Mobile No:', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",

            });
        }

        else {
            setOtpClass("block")
            toast.success('OTP Sent on Your Mobile No:', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
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
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="20px" viewBox="0 0 16.577 18.6"><path d="M-7722.37,2933a.63.63,0,0,1-.63-.63c0-4.424,2.837-6.862,7.989-6.862s7.989,2.438,7.989,6.862a.629.629,0,0,1-.63.63Zm.647-1.251h13.428c-.246-3.31-2.5-4.986-6.713-4.986s-6.471,1.673-6.714,4.986Zm2.564-12.518a4.1,4.1,0,0,1,1.172-3,4.1,4.1,0,0,1,2.979-1.229,4.1,4.1,0,0,1,2.979,1.229,4.1,4.1,0,0,1,1.171,3,4.341,4.341,0,0,1-4.149,4.5,4.344,4.344,0,0,1-4.16-4.5Zm1.251,0a3.1,3.1,0,0,0,2.9,3.254,3.094,3.094,0,0,0,2.9-3.253,2.878,2.878,0,0,0-.813-2.109,2.88,2.88,0,0,0-2.085-.872,2.843,2.843,0,0,0-2.1.856,2.841,2.841,0,0,0-.806,2.122Z" transform="translate(7723.3 -2914.703)" fill="currentColor" stroke="currentColor" stroke-width="0.6"></path></svg>
                </button>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    overlayClassName="Overlay2"
                >

                    <div className="flex ffsae flex-col space-y-3 content-center px-4 pb-2 border-0 bg-transparent justify-center  rounded-lg  border-gray-400 ">

                        <AiOutlineClose className='text-[23px] absolute top-2 right-3 cursor-pointer' onClick={closeModal} />
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

                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />

            </div>

        </>
    )
}



export default Model
