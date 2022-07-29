import React, { useState } from 'react'
import vector from '../images/Vectors.png';
import axios from 'axios';

const ImageUpload = () => {

    let [image, setImage] = useState('');
    let [selectedImage, setSelectedImage] = useState(null);


    const handaleChange = (event) => {
        setImage(URL.createObjectURL(event.target.files[0]));
        setSelectedImage(event.target.files[0])
        console.log(selectedImage);
    }

    const submit = () => {

        // axios.post
        console.log(selectedImage);
    }

    return (
        <div className='min-w-full min-h-screen '>

            <div className=' text-left p-8 text-4xl'>
                Demo
            </div>

            <div className='flex'>
                <div className='border-2  w-[40%]'>
                    Instruction
                </div>

                <div className=' w-[60%] mx-auto border-2'>
                    <div className='border-2 w-fit mx-auto min-w-[200px] min-h-[200px]'>
                        <img
                            className='bg-cover min-w-[200px] max-w-[200px] min-h-[200px] max-h-[200px]'
                            src={image}
                            
                        />
                    </div>
                    <input
                        className='w-56 h-16 mt-5'
                        type='file'
                        name='uploadedImage'
                        onChange={handaleChange}
                    />
                    <button
                        className=' px-10 py-1 bg-gray-300 rounded-md ml-10'
                        type='submit'
                        onClick={submit}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageUpload;