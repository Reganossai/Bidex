/** @format */

import React from "react";

import ImageForm from "../components/ImageForm";


function PinSuccess() {
  return (
    <div className='m-0 p-0 flex items-center  justify-between'>
      <ImageForm />

      <div id="tot" className='flex flex-col items-center justify-center mt-16 md:mt-0'>
        <div id="created" className='relative mb-16 mr-32'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='247'
              height='215'
              viewBox='0 0 247 215'
              fill='none'>
              <path
                d='M227.86 43.8431V41H225.965V43.8431H223.122V45.7385H225.965V48.5816H227.86V45.7385H230.703V43.8431H227.86Z'
                fill='#1F5EFA'
              />
              <path
                d='M165.439 2C167.27 2 168.755 3.48505 168.755 5.31695C168.755 7.14885 167.27 8.6339 165.439 8.6339C163.607 8.6339 162.122 7.14885 162.122 5.31695C162.122 3.48505 163.607 2 165.439 2Z'
                stroke='#1F5EFA'
                stroke-width='2.43'
              />
              <path
                d='M78.4385 10C80.2704 10 81.7555 11.485 81.7555 13.3169C81.7555 15.1489 80.2704 16.6339 78.4385 16.6339C76.6066 16.6339 75.1216 15.1489 75.1216 13.3169C75.1216 11.485 76.6066 10 78.4385 10Z'
                stroke='#1F5EFA'
                stroke-width='2.43'
              />
              <path
                d='M3.7908 81C5.88427 81 7.5816 82.6973 7.5816 84.7908C7.5816 86.8843 5.88427 88.5816 3.7908 88.5816C1.69733 88.5816 0 86.8843 0 84.7908C0 82.6973 1.69733 81 3.7908 81Z'
                fill='#1F5EFA'
              />
              <path
                d='M20.4953 181.843V179H18.5999V181.843H15.7568V183.739H18.5999V186.582H20.4953V183.739H23.3384V181.843H20.4953Z'
                fill='#1F5EFA'
              />
              <path
                d='M132.074 207C133.906 207 135.391 208.485 135.391 210.317C135.391 212.149 133.906 213.634 132.074 213.634C130.242 213.634 128.757 212.149 128.757 210.317C128.757 208.485 130.242 207 132.074 207Z'
                stroke='#1F5EFA'
                stroke-width='2.43'
              />
              <path
                d='M242.452 154C244.546 154 246.243 155.697 246.243 157.791C246.243 159.884 244.546 161.582 242.452 161.582C240.359 161.582 238.662 159.884 238.662 157.791C238.662 155.697 240.359 154 242.452 154Z'
                fill='#1F5EFA'
              />
            </svg>
          </div>
          <div
            className='absolute'
            style={{
              bottom: "40px",
              left: "65px",
            }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='127'
              height='127'
              viewBox='0 0 127 127'
              fill='none'>
              <path
                d='M80.4417 0.208252H46.1417C14.21 0.208252 0 14.4182 0 46.3499V80.6499C0 112.582 14.21 126.792 46.1417 126.792H80.4417C112.373 126.792 126.583 112.582 126.583 80.6499V46.3499C126.583 14.4182 112.373 0.208252 80.4417 0.208252ZM46.1417 114.542C20.825 114.542 12.25 105.967 12.25 80.6499V46.3499C12.25 21.0333 20.825 12.4583 46.1417 12.4583H80.4417C105.758 12.4583 114.333 21.0333 114.333 46.3499V80.6499C114.333 105.967 105.758 114.542 80.4417 114.542H46.1417Z'
                fill='#1F5EFA'
              />
              <path
                d='M55.3699 85.5499C53.8182 85.5499 52.2666 84.9783 51.0416 83.7533L35.1166 67.8283C32.7482 65.4599 32.7482 61.5399 35.1166 59.1716C37.4849 56.8033 41.4049 56.8033 43.7732 59.1716L55.3699 70.7683L82.8099 43.3283C85.1783 40.9599 89.0983 40.9599 91.4666 43.3283C93.8349 45.6966 93.8349 49.6166 91.4666 51.9849L59.6166 83.7533C58.4732 84.8966 56.9216 85.5499 55.3699 85.5499Z'
                fill='#1F5EFA'
              />
            </svg>
          </div>
        </div>

        <div className='mr-20 my-16 flex items-center justify-center flex-col text-center md:mr-28'>
          <h1 id="hijj" className='text-black font-bold text-2xl'>
            Pin
            <span
              className='pt-2'
              style={{
                width: "76px",
                height: "0px",
                border: "0",
                margin:"0px 0px 0px 6px"
              }}>
              Created </span>
            Successfully
          </h1>
          <div className='my-2'>
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
          <small
            style={{
              width: "350px",
              color: "#334155",
              fontWeight: "500",
              marginLeft:"10px",
              fontSize:"13px",
              paddingLeft:"40px",
            }}>
            Congratulations, your Pin has been created successfully! You can now
            easily sign in to your account
          </small>
        </div>
      </div>
    </div>
  );
}

export default PinSuccess;