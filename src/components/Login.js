import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import CarContext from '../context/CarContext'
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Login = () => {
    const navigate = useNavigate();
    const context = useContext(CarContext);
    const { setUser } = context;
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    
    const hundleLogin = async (e) => {
        e.preventDefault();
        const credential = {
          email: email,
          password: password,
        };
        try {
          const res = await axios.post(
            "https://marketplace-server-frjo.onrender.com/api/user/login",
            credential
          );
          setUser(res.data.existingUser);
          navigate('/');
        } catch (e) {
          alert("may be login credential incorrect");
        }
      };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 pt-10 w-screen">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create and account
              </h1>
              <form className="space-y-4 md:space-y-6" action="/">
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" onChange={(e)=>{setemail(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" onChange={(e)=>{setpassword(e.target.value)}} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <button onClick={hundleLogin} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Login
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      New User need to signup <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">signup here</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default Login
