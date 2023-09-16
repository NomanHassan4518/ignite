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
import { Link } from 'react-router-dom';
import axios from 'axios';

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
    const [register, setRegister] = useState('hidden')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [registerBtn, setRegisterBtn] = useState(true)
    let token = localStorage.getItem('Token')

    let authorized = localStorage.getItem('isAuthorized')

    const variefyNUmber = () => {
        let number = value.replace("+", "")
        axios({

            method: "GET",
            url: "https://pos-dev.myignite.online/connector/api/contactapi",
            params: {
                mobile_num: number
            },
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if (response.data.data.length === 0) {
                setOtpClass("hidden")
                setRegister("block")
                setRegisterBtn(false)
            } else {
                setIsOpen(false)
                toast.success("Login Successfully")
                localStorage.setItem("isAuthorized", "true")
                setOtpClass("hidden")
                setValue("")
            }

        }).catch((error) => {
            console.log("This is error", error);
        })

    }

    const registerUSer = () => {
        axios({
            method: "POST",
            url: "https://pos-dev.myignite.online/connector/api/contactapi",
            data: {
                first_name: firstName,
                last_name: lastName,
                email: email,
                type: "customer",
                mobile: value,
            },
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }).then((respone) => {
            if (respone.status === 201) {
                setFirstName("")
                setLastName("")
                setEmail("")
                setIsOpen(false)
                toast.success("Register Successfully")
                variefyNUmber()
            }


        })
    }


    const otpBox = () => {
        if (value.length === 0) {
            // setOtpClass("hidden")
            toast.error('Invalid Mobile No:');
        }

        else if (otp.length === 4) {

            var bodyFormData = new FormData();
            bodyFormData.set("mobile_no", value);
            bodyFormData.set("otp", otp)
            axios({
                method: "post",
                url: "https://pos-dev.myignite.online/connector/api/login-consumer",
                data: bodyFormData,
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(function (response) {
                    if (response.data.status === true) {
                        toast.success(response.data.message)
                        variefyNUmber()
                        localStorage.setItem("User", response.data.user.contact_id)
                        localStorage.setItem("userData" ,JSON.stringify( response.data.user))
                    } else {
                        toast.error(response.data.message)

                    }

                })
                .catch(function (response) {
                    //handle error
                    console.log(response);
                });
        }

        else if (value.length !== 0) {
            var bodyFormDataa = new FormData();
            bodyFormDataa.set("mobile_no", value);
            axios({
                method: "post",
                url: "https://pos-dev.myignite.online/connector/api/send-otp-consumer",
                data: bodyFormDataa,
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(function (response) {
                    if (response.data.status === true) {
                        toast.success(response.data.message)
                        setOtpClass("block")
                    } else {
                        toast.error(response.data.message)
                    }
                })
                .catch(function (response) {
                    console.log(response);
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

    const firstNameFun = (e) => {
        setFirstName(e.target.value)
    }

    const lastNameFun = (e) => {
        setLastName(e.target.value)
    }

    const emailFun = (e) => {
        setEmail(e.target.value)
    }


    return (
        <>

            <div >

                {authorized==="true" ?
                    <Link to="/my-account">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="20px" viewBox="0 0 16.577 18.6"><path d="M-7722.37,2933a.63.63,0,0,1-.63-.63c0-4.424,2.837-6.862,7.989-6.862s7.989,2.438,7.989,6.862a.629.629,0,0,1-.63.63Zm.647-1.251h13.428c-.246-3.31-2.5-4.986-6.713-4.986s-6.471,1.673-6.714,4.986Zm2.564-12.518a4.1,4.1,0,0,1,1.172-3,4.1,4.1,0,0,1,2.979-1.229,4.1,4.1,0,0,1,2.979,1.229,4.1,4.1,0,0,1,1.171,3,4.341,4.341,0,0,1-4.149,4.5,4.344,4.344,0,0,1-4.16-4.5Zm1.251,0a3.1,3.1,0,0,0,2.9,3.254,3.094,3.094,0,0,0,2.9-3.253,2.878,2.878,0,0,0-.813-2.109,2.88,2.88,0,0,0-2.085-.872,2.843,2.843,0,0,0-2.1.856,2.841,2.841,0,0,0-.806,2.122Z" transform="translate(7723.3 -2914.703)" fill="currentColor" stroke="currentColor" stroke-width="0.6"></path></svg>
                    </Link>

                    :
                    <button onClick={openModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="20px" viewBox="0 0 16.577 18.6"><path d="M-7722.37,2933a.63.63,0,0,1-.63-.63c0-4.424,2.837-6.862,7.989-6.862s7.989,2.438,7.989,6.862a.629.629,0,0,1-.63.63Zm.647-1.251h13.428c-.246-3.31-2.5-4.986-6.713-4.986s-6.471,1.673-6.714,4.986Zm2.564-12.518a4.1,4.1,0,0,1,1.172-3,4.1,4.1,0,0,1,2.979-1.229,4.1,4.1,0,0,1,2.979,1.229,4.1,4.1,0,0,1,1.171,3,4.341,4.341,0,0,1-4.149,4.5,4.344,4.344,0,0,1-4.16-4.5Zm1.251,0a3.1,3.1,0,0,0,2.9,3.254,3.094,3.094,0,0,0,2.9-3.253,2.878,2.878,0,0,0-.813-2.109,2.88,2.88,0,0,0-2.085-.872,2.843,2.843,0,0,0-2.1.856,2.841,2.841,0,0,0-.806,2.122Z" transform="translate(7723.3 -2914.703)" fill="currentColor" stroke="currentColor" stroke-width="0.6"></path></svg>
                    </button>
                }


                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    overlayClassName="Overlay2"
                >

                    <div className="flex ffsae flex-col space-y-3 content-center px-4 pb-2 border-0 bg-transparent justify-center  rounded-lg  border-gray-400 ">

                        <AiOutlineClose className='text-[23px] absolute top-2 right-3 cursor-pointer' onClick={closeModal} />
                        <h1 className='text-3xl font-bold text-[#626161] text-center my-6 '>{registerBtn ? "SignIn / SignUp " : "Login"}</h1>
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


                            <div className={`${register} `}>
                                <div className='mt-3'>
                                    <label className='font-semibold'>First Name</label>
                                    <input type="text" className=' mt-2 leading-4 inline-flex items-center justify-center  rounded-md bg-heading w-full py-4 px-5 h-11 ' value={firstName} onChange={firstNameFun} />
                                </div>
                                <div className='mt-3'>
                                    <label className='font-semibold'>Last Name</label>

                                    <input type="text" className=' leading-4 inline-flex items-center justify-center  rounded-md bg-heading w-full py-4 px-5 h-11 mt-2' value={lastName} onChange={lastNameFun} />
                                </div>

                                <div className='mt-3'>
                                    <label className='font-semibold'>Email</label>
                                    <input type="email" className=' leading-4 inline-flex items-center justify-center  rounded-md bg-heading w-full py-4 px-5 h-11 mt-2' value={email} onChange={emailFun} />
                                </div>
                            </div>


                        </div>

                        {registerBtn ?
                            <div className='relative'>
                                <button className="bg-[#3e3d3d]   text-white  text-[13px] ml-4  leading-4 inline-flex items-center justify-center font-bold rounded-md bg-heading w-full py-4 px-5 h-11 mt-5" onClick={otpBox}>Next
                                </button>
                            </div>

                            :
                            <div className='relative'>
                                <button className="bg-green-900   text-white  text-[13px]  leading-4 inline-flex items-center justify-center font-bold rounded-md bg-heading w-full py-4 px-5 h-11 mt-5" onClick={registerUSer}>Register
                                </button>
                            </div>}





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
