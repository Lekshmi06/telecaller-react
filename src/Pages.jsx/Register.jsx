import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoLogoElectron } from "react-icons/io5";
import { FaGoogle,FaApple ,FaFacebookSquare } from "react-icons/fa";

function Register() {
  const navigate = useNavigate()
  const handleNavigation = () => {
    navigate("/login")
  }
  return (
    <div className="min-h-screen bg-[#5a70f0] flex flex-col  items-center justify-center ">
        <div className=' pr-48  flex items-center  text-white'><div className='text-7xl'><  IoLogoElectron /></div> <div className='text-2xl font-mono'>Telecall</div></div>
    {/* <div className='bg-[#818fdf] w-screen h-20 rounded-tr-[30px]'> </div> */}
    <div className='flex flex-col gap-11'>
  <div className="bg-white p-8 rounded-tr-[100px] rounded-bl-[100px] mt-28 w-full sm:w-96">
    
    <h2 className="text-2xl font-bold mb-6 text-blue-500">Register</h2>
    <form>
    <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium  text-blue-500">Username</label>
        <input
          id="name"
          type="text"
          className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="username"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="number" className="block text-sm font-medium  text-blue-500">Mobile number</label>
        <input
          id="number"
          type="text"
          className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="mobile"
        />
      </div>
      {/* <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium  text-blue-500">Email</label>
        <input
          id="email"
          type="email"
          className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="you@example.com"
        />
      </div> */}
      <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-medium  text-blue-500">Password</label>
        <input
          id="password"
          type="password"
          className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="********"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-medium  text-blue-500">Confirm Password</label>
        <input
          id="confirm-password"
          type="password"
          className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="********"
        />
      </div>
      {/* <div className="flex items-center justify-between"> */}
        {/* <div className="flex items-center">
          <input id="remember_me" type="checkbox" className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"/>
          <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">Remember me</label>
        </div> */}
        {/* <div className="text-sm ml-36">
          <a href="#" className="font-medium text-blue-500 hover:text-blue-600">Forgot your password?</a>
        </div> */}
      {/* </div> */}
      
    </form>
    <div className="">
         
         
          <div className="mt-1 grid grid-cols-3 ">
            <button className="w-full  rounded-md py-2 px-4 text-black hover:bg-blue-900 focus:outline-none focus:bg-blue-900"><FaFacebookSquare /></button>
            <button className="w-ful text-black rounded-md py-2 px-4 hover:bg-red-700 focus:outline-none focus:bg-red-700"><FaGoogle /></button>
            <button className="w-full  text-black rounded-md py-2 px-4 hover:bg-gray-800 focus:outline-none focus:bg-gray-800"><FaApple /></button>
          </div>
         
        </div>
    
  </div>
  <div className="p-8   flex gap-3">
    
      <p onClick={handleNavigation} className="text-sm text-blue-100">Already have an account? <a href="/login" className="font-medium text-blue-100 hover:text-blue-600">Sign in</a></p>
      <button onClick={handleNavigation} type="submit" className="  text-blue-100  border border-blue-100 rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign up</button>
      </div>
      </div>
</div>
   
    
  );
}

export default Register;
