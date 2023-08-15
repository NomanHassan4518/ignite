import React from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react';


const customStyles = {
    content: {
        position: "absolute",
        width: "100%",
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
                <button onClick={openModal}  >
                <svg xmlns="http://www.w3.org/2000/svg" width="17px" height="18px" viewBox="0 0 18.942 20" class="md:w-4 xl:w-5 md:h-4 xl:h-5"><path d="M381.768,385.4l3.583,3.576c.186.186.378.366.552.562a.993.993,0,1,1-1.429,1.375c-1.208-1.186-2.422-2.368-3.585-3.6a1.026,1.026,0,0,0-1.473-.246,8.343,8.343,0,1,1-3.671-15.785,8.369,8.369,0,0,1,6.663,13.262C382.229,384.815,382.025,385.063,381.768,385.4Zm-6.152.579a6.342,6.342,0,1,0-6.306-6.355A6.305,6.305,0,0,0,375.615,385.983Z" transform="translate(-367.297 -371.285)" fill="currentColor" fill-rule="evenodd"></path></svg>
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
