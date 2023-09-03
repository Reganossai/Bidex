
import React from "react";

function MessageBox({message, setMessage}) {
  return (
    <div>
      <div className='message-input'>
        <div className='input-add'>
          <div className='add-icon input-utils '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='39'
              height='39'
              viewBox='0 0 39 39'
              fill='none'>
              <rect width='39' height='39' rx='19.5' fill='white' />
              <path
                d='M25.4091 17.2841H21.7159V13.5909C21.7159 12.3795 20.7114 11.375 19.5 11.375C18.2886 11.375 17.2841 12.3795 17.2841 13.5909V17.2841H13.5909C12.3795 17.2841 11.375 18.2886 11.375 19.5C11.375 20.7114 12.3795 21.7159 13.5909 21.7159H17.2841V25.4091C17.2841 26.6205 18.2886 27.625 19.5 27.625C20.7114 27.625 21.7159 26.6205 21.7159 25.4091V21.7159H25.4091C26.6205 21.7159 27.625 20.7114 27.625 19.5C27.625 18.2886 26.6205 17.2841 25.4091 17.2841Z'
                fill='#292D32'
              />
            </svg>
          </div>
          <div>
            <input
              className='mx-4'
              spellCheck='true'
              placeholder='Type a Message'
              type='text'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                outline: "none",
                color: "#000",
                marginTop: "8px",

                fontSize: "18px",
                width: "140%",
                backgroundColor: "transparent",
                border: "none",
              }}
            />
          </div>
        </div>

        <div className='speaker-icon input-utils'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'>
            <path
              d='M12 15.5C14.21 15.5 16 13.71 16 11.5V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11.5C8 13.71 9.79 15.5 12 15.5Z'
              stroke='white'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M4.3501 9.6499V11.3499C4.3501 15.5699 7.7801 18.9999 12.0001 18.9999C16.2201 18.9999 19.6501 15.5699 19.6501 11.3499V9.6499'
              stroke='white'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M10.6101 6.43012C11.5101 6.10012 12.4901 6.10012 13.3901 6.43012'
              stroke='white'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M11.2 8.54982C11.73 8.40982 12.28 8.40982 12.81 8.54982'
              stroke='white'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M12 19V22'
              stroke='white'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default MessageBox;