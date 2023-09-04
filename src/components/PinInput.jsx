
import React from "react";
import OTPInput from "./OTPInput";

function PinInput({text}) {
  return (
    <>
      <div className='info-pin'>
        <div className='flex items-center justify-center flex-col'>
          <h2 className='pin-header my-4'>{text}</h2>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='78'
              height='6'
              viewBox='0 0 78 6'
              fill='none'>
              <path
                d='M3 3H75'
                stroke='#1F5EFA'
                stroke-opacity='0.75'
                stroke-width='5'
                stroke-linecap='round'
              />
            </svg>
          </div>
        </div>
        <div className='my-5'>
          <OTPInput length={4} />
        </div>
        <div>
          <button className='btn-continue my-4'>Continue</button>
        </div>
      </div>
    </>
  );
}

export default PinInput;