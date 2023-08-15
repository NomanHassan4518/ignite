import React from 'react';
import Modal from 'react-modal';
import { FiSearch } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react';


const customStyles = {
    content: {
        position: "absolute",
        width: "80%",
        background: "tarnsparent",
        top: '10%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: "9100",
        border: "none"
    },
};




// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

const Model = () => {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [text, setText] = useState(" ")


    const textChange = (e) => {
        setText(e.target.value)
    }
    const clearText = (e) => {
        let newText = "";
        setText(newText)
        e.preventDefault()
    }

    function openModal() {
        setIsOpen(true);

    }



    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            <div >
                <button onClick={openModal} style={{}}  >
                    <div className='flex'>
                        <span className='text-[25px]'><FiSearch /></span>
                        <span className='font-semibold text-[18px]'>Search</span>
                    </div>
                </button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    overlayClassName="Overlay1"
                >

                    <form>
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg class="w-4 h-4 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" id="default-search" class="block w-full overflow-hidden p-4 pl-10 text-sm text-gray-900 text-[23px] border-none  rounded-lg bg-white focus:ring-0 focus:border-none dark:bg-gray-700 dark:border-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-none placeholder:text-[18px]" placeholder="Search..." value={text} onChange={textChange} />
                            <button class="text-gray-700 absolute right-2 bottom-2.5 focus:ring-0 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm px-4 py-2 dark:focus:ring-black-800" onClick={clearText}><AiOutlineClose className='text-[23px] cursor-pointer' /></button>
                        </div>

                    </form>


                </Modal>
            </div>
        </>
    )
}



export default Model
