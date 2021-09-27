import { useState } from "react";

const test = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <div className='flex'>
      <div
        className={`absolute transition duration-200 transform ${
          show ? "translate-x-0" : "-translate-x-full"
        }  w-80 h-screen bg-red-500 p-3 lg:relative  lg:inset-y-0 lg:left-0 lg:translate-x-0`}
      >
        <div className='flex justify-between p-3 text-white'>
          <h1>hi</h1>
          <span className='cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </span>
        </div>
        <div className='bg-pink-400 rounded p-2'>test</div>
      </div>
      <div className='flex-1'>
        <header className='bg-black h-10 flex items-center text-white pl-3'>
          <span className='hover:cursor-pointer lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </span>
        </header>
        {children}
      </div>
    </div>
  );
};

export default test;
