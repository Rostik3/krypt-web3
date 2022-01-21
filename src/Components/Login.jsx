import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={() => {}}
        className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism'
    />
);

const Login = () => {
  return (
    <div className='flex w-full h-[70vh] sm:h-[80vh] justify-center items-center gradient-bg-welcome'>
        <Link to='/'>
            <AiOutlineArrowLeft fontSize={24} color='#fff' className='absolute top-5 left-5 sm:top-10 sm:left-10' />
        </Link>
        <div className='flex justify-between p-5 sm:w-96 h-2/6 flex-col items-center blue-glassmorphism'>
            <div>
                <Input placeholder='Username' name='username' type='text' handleChange={() => {}} />
                <Input placeholder='Password' name='password' type='password' handleChange={() => {}} />
            </div>
            <div className='h-[1px] w-full bg-gray-400 my-2' />
            <button
                type='button'
                onClick={() => {}}
                className='text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer'
            >
                Login
            </button>
        </div>
    </div>
  );
}

export default Login;
