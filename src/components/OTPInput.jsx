import React, { useState, useRef } from 'react';

const OTPInput = ({ length  }) => {
  const [otp, setOTP] = useState(Array(length).fill(''));
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    setOTP((prevOTP) => {
      const newOTP = [...prevOTP];
      newOTP[index] = value;
      return newOTP;
    });

    if (index < length - 1 && value !== '') {
      inputRefs.current[index + 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').slice(0, length);

    setOTP(pastedData.split(''));
  };

  return (
    <div className="flex items-center mt-6 justify-center ">
      {otp.map((digit, index) => (
        <input
        style={{
            borderRadius: '15px',
            border: '1px solid #94A3B8'
        }}
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          className="w-12 h-12 m-2 text-2xl text-center   focus:outline-none"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onPaste={handlePaste}
        />
      ))}
    </div>
  );
};

export default OTPInput;