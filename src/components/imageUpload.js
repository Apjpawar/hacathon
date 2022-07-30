import React, { useState } from 'react'
import vector from '../images/Vectors.png';
import axios from 'axios';
import { AiOutlineCloudUpload } from "react-icons/ai";


const ImageUpload = () => {

    let [image, setImage] = useState();
    let [selectedImage, setSelectedImage] = useState(null);


    const handaleChange = (event) => {
        setImage(URL.createObjectURL(event.target.files[0]));
        setSelectedImage(event.target.files[0])
        console.log(selectedImage);
    }

    const submit = () => {
        const fd = new FormData();
        fd.append('image', selectedImage, selectedImage.name);
        axios.post('#', fd)
            .then(res => {
                console.log(res);
            });
        console.log(selectedImage);
    }

    return (
        <div className=' min-w-full min-h-screen bg-[#093545] text-white'>

            <div className='p-2 text-4xl shadow-4xl text-center bg-white text-orange-500'>
                Wall Generator
            </div>

            <div className='flex mt-28'>
                <div className='border-2  w-[40%] '>
                    Instruction
                </div>

                <div className=' w-[60%] mx-auto'>
                    <div className='border-2 w-fit mx-auto min-w-[200px] min-h-[200px] '>
                        <img
                            className='bg-cover min-w-[500px] max-w-[300px] min-h-[3npm `00px] max-h-[200px] '
                            src={image}
                        />
                    </div>
                    <div className='flex gap-20 items-center justify-center border-2'>
                        <label>Upload Image</label>
                        <label for='fileUpload' className=''><AiOutlineCloudUpload className='w-12 h-16' /></label>


                        <input
                            style={{ color: 'red' }}
                            className='w-56 h-16 mt-5'
                            type='file'
                            name='uploadedImage'
                            onChange={handaleChange}
                            id='fileUpload'
                            hidden
                        />

                        <button
                            className=' px-10 py-1 bg-orange-500 rounded-md ml-10'
                            type='submit'
                            onClick={submit}
                        >
                            Send
                        </button>

                    </div>
                </div>
            </div>
            <img className='min-w-full fixed bottom-0' src={vector} />
        </div>
    )
}

export default ImageUpload;