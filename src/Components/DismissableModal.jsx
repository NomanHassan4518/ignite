import React from 'react';
import Modal from 'react-modal';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';
import "../App.css";
import OtpInput from 'react-otp-input';
import { toast } from 'react-toastify';
// import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
                        console.log((response.data.user));
                       localStorage.setItem("User" , response.data.user.contact_id)
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

                <button >
                    <div className='flex'>
                        {authorized ?  <span className='font-semibold text-[20px]'  ><Link to="/my-account">Account</Link></span> : <span className='font-semibold text-[20px]' onClick={openModal} >Sign In</span>}

                      
                    </div>
                </button>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    overlayClassName="Overlay2"

                >
                    <div className={`flex  flex-col space-y-3 content-center px-4 pb-2 border-0 bg-transparent justify-center  rounded-lg  border-gray-400`}>
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
                        {registerBtn ? <div className='relative'>
                            <button className="bg-[#3e3d3d]   text-white  text-[13px]  leading-4 inline-flex items-center justify-center font-bold rounded-md bg-heading w-full py-4 px-5 h-11 mt-5" onClick={otpBox}>Next
                            </button>
                        </div> : <div className='relative'>
                            <button className="bg-green-900   text-white  text-[13px]  leading-4 inline-flex items-center justify-center font-bold rounded-md bg-heading w-full py-4 px-5 h-11 mt-5" onClick={registerUSer}>Register
                            </button>
                        </div>}



                    </div>






                </Modal>
            </div>

        </>
    )
}



export default Model
