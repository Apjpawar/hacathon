import React, { useState } from 'react';
import image from '../images/Vectors.png';
import {Link} from 'react-router-dom'

const LoginPage = () => {
    let [loginToggle, setLoginToggle] = useState(true);

    const adminLoginbtn = () => {
        setLoginToggle(true)
    }

    const userLoginbtn = () => {
        setLoginToggle(false)
    }

    const login = () => {
        <Link to="/admin"></Link>
    }

    return (
        <div className='bg-[#093545] min-w-full min-h-screen flex items-center justify-center text-white flex-col'>
            <div className='border-2 p-16 rounded-3xl flex items-center justify-center'>
                <div>
                    <h2 className='text-[64px] mb-10'>Sign in</h2>

                    <div className='flex flex-col gap-8'>
                        <div className='w-[350px] h-[45px] bg-[#224957] rounded-xl border-transparent flex border-2 border-white'>
                            <div 
                                style={loginToggle ? {backgroundColor: '#f97417'} : {backgroundColor: ''} }
                                className='w-[50%] flex justify-center items-center h-full rounded-l-xl hover:cursor-pointer'
                                onClick={adminLoginbtn}
                            >Admin
                            </div>
                            <div 
                                style={loginToggle ? {backgroundColor: ''} : {backgroundColor: '#f97417'} }
                                className='w-[50%] flex justify-center items-center h-full rounded-r-xl hover:cursor-pointer'
                                onClick={userLoginbtn}
                            >User</div>
                        </div>
                        <input className='w-[350px] h-[45px] bg-[#224957] rounded-xl border-transparent pl-5' type='text' placeholder='username'></input>
                        <input className='w-[350px] h-[45px] bg-[#224957] rounded-xl border-none pl-5' type='text' placeholder='password'></input>

                        <div className='flex gap-20 ml-2'>
                            <div>Remember me</div>
                            <div className='text-orange-500'>Forgot password?</div>
                        </div>
                        <Link to = {loginToggle ? '/admin' : '/user'} >
                         <div  onClick={login} className='w-[350px] h-[45px] bg-orange-500 flex items-center justify-center rounded-lg hover:cursor-pointer'>Login</div> </Link>
                    </div>
                </div>
            </div>
            <img className='min-w-full fixed bottom-0' src={image} />
        </div>
    )
}

export default LoginPage