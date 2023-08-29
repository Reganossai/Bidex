
import React from "react";

function NewSeed() {
  return (
    <div className='new-seed-container'>
      <h1 className='px-3'
        style={{
          color: "black",
          fontWeight: "500",
          fontSize: "24px",
        }}>
        New Seed
      </h1>
      <form
        action=''
        onSubmit={(e) => e.preventDefault()}
        className='flex flex-col item-center justify-center'>
        <div className='my-2'>
          <h2 className='px-3 my-1'>From</h2>
          <div className='seed-country-input px-3 flex justify-between items-center'>
            <div className='flex items-center justify-center'>
              <div className='country-flag'></div>
              <select
                name='from-currency'
                id='from-currency'
                className='select-currency'>
                <option value='USA'>USA</option>
                <option value='NGN'>NGN</option>
              </select>
            </div>
            <div>
              <h2
                className='price font-bold text-xl'
                style={{
                  color: "#194BC8",
                }}>
                10000.00
              </h2>
            </div>
          </div>
        </div>

        <div className='my-3'>
          <div className="flex justify-between px-3 my-1">
            <h2>To Estimate</h2>
            <div className="flex">
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='12'
              height='19'
              viewBox='0 0 12 19'
              fill='none'>
              <path
                d='M6.35675 0.350765C6.074 0.0480702 5.5994 0.0319015 5.29671 0.314652L0.36399 4.92234C0.061294 5.20509 0.0451253 5.67969 0.327876 5.98239C0.610627 6.28509 1.08523 6.30125 1.38792 6.0185L5.77256 1.92278L9.86828 6.30741C10.151 6.61011 10.6256 6.62628 10.9283 6.34353C11.231 6.06078 11.2472 5.58618 10.9644 5.28348L6.35675 0.350765ZM5.94537 18.8778L6.55824 0.888268L5.05911 0.837195L4.44624 18.8268L5.94537 18.8778Z'
                fill='#1F5EFA'
              />
            </svg>
            <svg
            className="arrow-down"
              xmlns='http://www.w3.org/2000/svg'
              width='12'
              height='19'
              viewBox='0 0 12 19'
              fill='none'>
              <path
                d='M6.35675 0.350765C6.074 0.0480702 5.5994 0.0319015 5.29671 0.314652L0.36399 4.92234C0.061294 5.20509 0.0451253 5.67969 0.327876 5.98239C0.610627 6.28509 1.08523 6.30125 1.38792 6.0185L5.77256 1.92278L9.86828 6.30741C10.151 6.61011 10.6256 6.62628 10.9283 6.34353C11.231 6.06078 11.2472 5.58618 10.9644 5.28348L6.35675 0.350765ZM5.94537 18.8778L6.55824 0.888268L5.05911 0.837195L4.44624 18.8268L5.94537 18.8778Z'
                fill='#1F5EFA'
              />
            </svg>
            </div>
          </div>
          <div className='seed-country-input px-3 flex justify-between items-center'>
            <div className='flex items-center justify-center'>
              <div className='country-flag lightBlue'></div>
              <select
                name='from-currency'
                id='from-currency'
                className='select-currency'>
                <option value='NGN'>NGN</option>
                <option value='USA'>USA</option>
              </select>
            </div>
            <div>
              <h2
                className='price font-bold text-xl'
                style={{
                  color: "#194BC8",
                }}>
                230483.66
              </h2>
            </div>
          </div>
        </div>
        <h2 className='text-black font-extrabold my-2 px-3 mb-2'>1USD = 900NGN</h2>
        <button className=' seed-btn flex justify-center items-center text-center text-white'>
          Seed
        </button>
      </form>
    </div>
  );
}

export default NewSeed;