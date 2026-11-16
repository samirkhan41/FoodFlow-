import axios from "axios";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { serverUrl } from "../App";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [role, setRole] = useState("user");

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    // from here it is the logic of Signup
    const handleSignup = async () => {
        try {

            const result = await axios.post(`${serverUrl}/api/auth/signup`, {
                fullName,
                email,
                mobileNumber: mobile,
                password,
                role,
            }

                , { withCredentials: true })
                navigate("/")
            console.log(result.data)
        }

        catch (error) {
            console.log("error from the signup side", error.message)
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
                    Create your account to get started with delicious food deliveries
                </p>

                <form onSubmit={handleFormSubmit}>

                    {/* Full Name */}
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                    </label>

                    <input
                        type="text"
                        placeholder="Enter your Full Name"
                        className="w-full h-11 px-3 text-sm border border-gray-200 rounded-lg outline-none focus:border-[#ff563d]"
                        onChange={(e) => {
                            setFullName(e.target.value)
                        }
                        } value={fullName}
                    />

                    {/* Email */}
                    <label className="block text-sm font-semibold text-gray-700 mt-5 mb-2">
                        Email
                    </label>

                    <input
                        type="email"
                        placeholder="Enter your Email"
                        className="w-full h-11 px-3 text-sm border border-gray-200 rounded-lg outline-none focus:border-[#ff563d]"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        value={email}
                    />

                    {/* Mobile */}
                    <label className="block text-sm font-semibold text-gray-700 mt-5 mb-2">
                        Mobile
                    </label>

                    <input
                        type="tel"
                        placeholder="Enter your Mobile Number"
                        className="w-full h-11 px-3 text-sm border border-gray-200 rounded-lg outline-none focus:border-[#ff563d]"
                        onChange={(e) => {
                            setMobile(e.target.value);
                        }}
                        value={mobile}
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
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            value={password}
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

                    {/* Role */}
                    <label className="block text-sm font-semibold text-gray-700 mt-5 mb-2 ">
                        Role
                    </label>

                    <div className="flex gap-2">

                        {["user", "owner", "deliveryBoy"].map((item) => (
                            <button
                                key={item}
                                type="button"
                                onClick={() => setRole(item)}
                                className={`flex-1 h-11 text-sm font-semibold rounded-lg border ${role === item
                                    ? "bg-[#ff563d] text-white border-[#ff563d] cursor-pointer"
                                    : "bg-white text-[#c27669] border-gray-300 cursor-pointer"
                                    }`}
                            >
                                {item}
                            </button>
                        ))}

                    </div>

                    {/* Sign Up */}
                    <button
                        type="submit"
                        className="w-full h-11 mt-5 bg-[#ff563d] text-white text-sm font-semibold rounded-lg hover:bg-[#f34d35] transition cursor-pointer"
                        onClick={() => {
                            handleSignup()
                        }}
                    >

                        Sign Up
                    </button>

                    {/* Google wala part hai  */}
                    <button
                        type="button"
                        className="w-full h-11 mt-3 flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 cursor-pointer"
                    >
                        <FaGoogle className="text-[#4285F4]" size={16} />
                        Sign up with Google
                    </button>

                    {/* Login */}
                    <div className="flex justify-center items-center gap-1 mt-5">
                        <p className="text-sm text-gray-600">
                            Already have an account?
                        </p>

                        <p className="text-[#ff563d] text-sm font-semibold cursor-pointer" onClick={() => {
                            navigate("/login")
                        }
                        }>
                            Login
                        </p>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Signup;