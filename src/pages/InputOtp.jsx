/** @format */

import React from "react";

import ImageForm from "../components/ImageForm";
import OTPInput from "../components/OTPInput";
function InputOtp() {
  return (
    <div className='m-0 p-0 flex items-center  justify-between'>
      <ImageForm />
      <div className=''>
        <form
          action=''
          className='p-8 mt-10 mr-20 flex flex-col items-center text-center justify-center md:p-3'>
          <div>
            <div className='mt-7 flex items-center justify-center flex-col '>
              <h1 className='text-black text-center font-bold mt-10 text-2xl'>
                Input
                <span
                  className='pt-2'
                  style={{
                    width: "76px",

                    height: "0px",
                    border: "0",
                  }}>
                  OTP
                </span>
                Code
              </h1>
              <div className="mt-2">
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='77'
                  height='6'
                  viewBox='0 0 77 6'
                  fill='none'>
                  <path
                    d='M2.5 3H74.5'
                    stroke='#1F5EFA'
                    stroke-opacity='0.75'
                    stroke-width='5'
                    stroke-linecap='round'
                  />
                </svg>
              </div>
            </div>

            <h2
              style={{
                color: "#1F1F1F",
                width: "342px",
                fontSize: "14px",
              }}
              className='text-center mt-6'>
              Please enter the OTP sent to your account so we can verify your
              account
            </h2>
            {/* blocks */}
            <OTPInput length={6} />
            <h3 className='mt-6 cursor-pointer'>
              Didn't receive a code ?
              <span
                style={{
                  color: "#1F5EFA",
                }}>
                Resend
              </span>
            </h3>
          </div>
          <div>
            <button
              style={{
                backgroundColor: "#1F5EFA",
                borderRadius: "30px",
                height: "48px",
                marginTop: "145px",

                width: "398px",
              }}
              className='p-4  flex items-center justify-center text-center  text-white'>
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InputOtp;