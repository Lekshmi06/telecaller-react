import { useState } from "react"; 
import { FaGoogle,FaApple ,FaFacebookSquare } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { IoLogoElectron } from "react-icons/io5";
import MakeApiRequest from '../Functions/AxiosApi';
import Cookies from 'js-cookie';
// import Cookies from "js-cookie";
import config from '../Functions/Config';


function Login() {
  const navigate = useNavigate()
  const handleNavigation = () => {
    navigate("/")
  }
  const headers = {
    'Content-Type': 'application/json',
    
  };
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState("");
  const HandleLogin = (e) => {
    e.preventDefault(); 
    const data = {
      username: formData.username,
      password: formData.password,
    };
    MakeApiRequest('POST', `${config.baseUrl}leads/login`,headers,  data)
        .then((response) => {
          Cookies.set('token', response.access, { expires: 7 });
          // const token = response.access;
          // console.log(token,"token")
            console.log(response,"data")
           
            navigate("/telecaller")
           
              

        })
        .catch((error) => {
            console.log(error)
            setErrorMessage("Invalid username or password.");
        })
}
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
}
  // const handleLead = () => {
  //   navigate("/telecaller")
  // }
  return (
    <div className="min-h-screen bg-[#5a70f0] flex flex-col  items-center justify-center ">
      <div className='mb-30 pr-48  flex items-center  text-white'><div className='text-7xl'><  IoLogoElectron /></div> <div className='text-2xl font-mono'>Telecall</div></div>
        {/* <div className='bg-[#818fdf] w-screen h-20 rounded-tr-[30px]'> </div> */}
        <div className='flex flex-col gap-11 mt-30'>
        <form onSubmit={HandleLogin}>
      <div className="bg-white p-8 rounded-tr-[100px] rounded-bl-[100px] mt-28 w-full sm:w-96">
        
        <h2 className="text-2xl font-bold mb-6 text-blue-500">Login</h2>
        {/* <form onSubmit={HandleLogin}> */}
          <div className="mb-4">
            {/* <label htmlFor="email" className="block text-sm font-medium  text-blue-500">Email</label>
            <input
              id="email"
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="you@example.com"
            /> */}
             <label htmlFor="username" className="block text-sm font-medium  text-blue-500">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="name"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium  text-blue-500">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="********"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
         
            <div className="text-sm ml-36">
              <a href="#" className="font-medium text-blue-500 hover:text-blue-600">Forgot your password?</a>
            </div>
         
          
        {/* </form> */}
        <div className="">
         
         
          <div className="mt-1 grid grid-cols-3 ">
            <button className="w-full  rounded-md py-2 px-4 text-black hover:bg-blue-900 focus:outline-none focus:bg-blue-900"><FaFacebookSquare /></button>
            <button className="w-ful text-black rounded-md py-2 px-4 hover:bg-red-700 focus:outline-none focus:bg-red-700"><FaGoogle /></button>
            <button className="w-full  text-black rounded-md py-2 px-4 hover:bg-gray-800 focus:outline-none focus:bg-gray-800"><FaApple /></button>
          </div>
         
        </div>
        </div>
        <div className="p-8   flex gap-3">
        
        <p onClick={handleNavigation} className="text-sm text-blue-100">Don't have an account? <a href="#" className="font-medium text-blue-100 hover:text-blue-600">Sign up</a></p>
        <button  type="submit" className="  text-blue-100  border border-blue-100 rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign in</button>
        </div>
        </form>
      {/* </div> */}
     
         
          </div>
    </div>
  );
}

export default Login;
