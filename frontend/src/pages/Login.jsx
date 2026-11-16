import axios from "axios";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { serverUrl } from "../App";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
  }
  //from here it is the logic of login

  const handleLogin = async () => {
    try {
        const resultData= await axios.post(`${serverUrl}/api/auth/login`,{
        email,
        password
    },{withCredentials:true})
    console.log(resultData.data)
    } catch (error) {
        console.log("error from the login side",error.message)
    }
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fffaf8]">

      <div className="w-[420px] bg-white p-8 rounded-xl shadow-md">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-[#ff563d]">
          Foodyo
        </h1>

        <p className="text-sm text-gray-500 leading-6 mt-2 mb-7">
          Login to your account and continue ordering delicious food
        </p>

        <form onSubmit={handleFormSubmit}>

          {/* Email */}
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full h-11 px-3 text-sm border border-gray-200 rounded-lg outline-none focus:border-[#ff563d]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <label className="block text-sm font-semibold text-gray-700 mt-5 mb-2">
            Password
          </label>

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full h-11 px-3 pr-10 text-sm border border-gray-200 rounded-lg outline-none focus:border-[#ff563d]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? (
                <FiEyeOff size={18} />
              ) : (
                <FiEye size={18} />
              )}
            </button>

          </div>

          {/* Forgot Password */}
          <div className="flex justify-end mt-2">
            <p onClick={()=>
                {
                    navigate("/forgot-password")
                }
            } className="text-sm text-[#ff563d] cursor-pointer">
              Forgot Password?
            </p>
          </div>

          {/* Login */}
          <button
            type="submit"
            className="w-full h-11 mt-5 bg-[#ff563d] text-white text-sm font-semibold rounded-lg hover:bg-[#f34d35] transition"
            onClick={handleLogin}
          >
            
            Login
          </button>

          {/* Google */}
          <button
            type="button"
            className="w-full h-11 mt-3 flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
          >
            <FaGoogle className="text-[#4285F4]" size={16} />
            Login with Google
          </button>

          {/* Signup */}
          <div className="flex justify-center items-center gap-1 mt-5">
            <p className="text-sm text-gray-600">
              Don't have an account?
            </p>

            <p className="text-[#ff563d] text-sm font-semibold cursor-pointer" onClick={()=>
                {
                    navigate("/signup")
                }
            }>
              Sign Up
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;