/** @format */

import React from "react";

import ImageForm from "../components/ImageForm";
import OTPInput from "../components/OTPInput";
function InputOtp() {
  return (
    <div id="box-container" className="m-0 p-0 flex items-center  justify-between">
      <ImageForm />
      <div className="box">
        <form action="" className="input-otp-form">
          <div>
            <div className="headf">
              <h1 >
                Input <span
                  className="pt-2"
                  style={{
                    width: "76px",
                    fontWeight: "700",
                    height: "0px",
                    border: "0",
                  }}
                >
                  OTP
                </span> Code</h1>
              <div className="mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="77"
                  height="6"
                  id="vvv"
                  viewBox="0 0 77 6"
                  fill="none"
                >
                  <path
                    d="M2.5 3H74.5"
                    stroke="#1F5EFA"
                    stroke-opacity="0.75"
                    stroke-width="5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>

            <h2>
              Please enter the OTP sent to your account so we can verify your
              account
            </h2>
            {/* blocks */}
            <div className="test">
            <OTPInput length={6} />
            </div>
            
            <h3 id="headf-h3" className="mt-6 cursor-pointer">  Didn't receive a code ? <span style={{ color: "#1F5EFA",}}>
                Resend
              </span>
            </h3>
          </div>
          <div>
            <button
            id="otp-btn"
              className=" btn btn-primary"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InputOtp;
