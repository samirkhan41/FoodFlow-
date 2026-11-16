import React from "react";

import { IoMdArrowRoundBack } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fffaf8] px-4">

      <div className="w-full max-w-[420px] bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100">

        {step == 1 && (
          <div>


            <h3
              onClick={() => {
                navigate("/login");
              }}
              className="inline-flex items-center gap-2 text-lg font-semibold text-gray-800 cursor-pointer hover:text-[#ff563d] transition mb-8"
            >
              <IoMdArrowRoundBack size={20} />
              Forgot Password
            </h3>


            <p className="text-sm text-gray-500 leading-6 mb-7">
              Don't worry! Enter your email address and we'll send you an OTP
              to reset your password.
            </p>

        
            <label
              className="block text-sm font-semibold text-gray-700 mb-2"
              htmlFor="email"
            >
              Email Address
            </label>

            <input
              className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-200 rounded-lg outline-none focus:bg-white focus:border-[#ff563d] focus:ring-2 focus:ring-[#ff563d]/10 transition"
              type="email"
              id="email"
              placeholder="Enter your email"
            />

            
            <button
              className="mt-6 w-full h-11 bg-[#ff563d] text-white text-sm font-semibold rounded-lg hover:bg-[#f34d35] active:scale-[0.98] transition shadow-sm"
            >
              Send OTP
            </button>


          </div>
        )}

        {step == 2 && (
          <div>

            {/* Back + Heading */}
            <h3
              className="inline-flex items-center gap-2 text-lg font-semibold text-gray-800"
            >
              <IoMdArrowRoundBack size={20} />
              Forgot Password
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-500 leading-6 mt-3 mb-7">
              Enter the OTP that was sent to your email address.
            </p>

            {/* OTP */}
            <label
              className="block text-sm font-semibold text-gray-700 mb-2"
              htmlFor="otp"
            >
              OTP
            </label>

            <input
              className="w-full h-11 px-4 text-sm bg-gray-50 border border-gray-200 rounded-lg outline-none focus:bg-white focus:border-[#ff563d] focus:ring-2 focus:ring-[#ff563d]/10 transition tracking-[0.3em]"
              type="text"
              id="otp"
              placeholder="Enter OTP"
            />

     
            <button
              className="mt-6 w-full h-11 bg-[#ff563d] text-white text-sm font-semibold rounded-lg hover:bg-[#f34d35] active:scale-[0.98] transition shadow-sm"
            >
              Verify OTP
            </button>

          </div>
        )}

        {step ==3 && <div>
  <h3
    onClick={() => {
      navigate("/login");
    }}
    className="inline-flex items-center gap-2 text-lg font-semibold text-gray-800 cursor-pointer hover:text-[#ff563d] transition mb-8"
  >
    <IoMdArrowRoundBack size={20} />
    Forgot Password
  </h3>

  <label
    htmlFor="password"
    className="block text-sm font-semibold text-gray-700 mb-2"
  >
    New Password
  </label>

  <input
    type="text"
    placeholder="Enter New Password"
    className="w-full h-11 px-4 mb-5 text-sm bg-gray-50 border border-gray-200 rounded-lg outline-none focus:bg-white focus:border-[#ff563d] focus:ring-2 focus:ring-[#ff563d]/10 transition"
    value={newPassword}
    onChange={(e)=>
    {
        setNewPassword(e.target.value)
    }}
  />

  <label
    htmlFor="password"
    className="block text-sm font-semibold text-gray-700 mb-2"
  >
    Confirm Password
  </label>

  <input
    type="text"
    placeholder="Confirm New Password"
    className="w-full h-11 px-4 mb-6 text-sm bg-gray-50 border border-gray-200 rounded-lg outline-none focus:bg-white focus:border-[#ff563d] focus:ring-2 focus:ring-[#ff563d]/10 transition"
    value={confirmPassword}
    onChange={(e)=>
    {
        setConfirmPassword(e.target.value)
    }}
  />

  <button
    className="w-full h-11 bg-[#ff563d] text-white text-sm font-semibold rounded-lg hover:bg-[#f34d35] active:scale-[0.98] transition shadow-sm"
  >
    Reset Password
  </button>
</div> }

      </div>
    </div>
  );
};

export default ForgotPassword