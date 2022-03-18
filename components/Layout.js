import { useState } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Search from "./Search";

const Layout = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className='flex min-h-screen w-full  bg-gray-100'>
        <div
          className={`fixed transition duration-200 transform  ${
            show ? "translate-x-0 " : "-translate-x-full"
          }  w-64  bg-black p-3 lg:relative  lg:inset-y-0 lg:left-0 lg:translate-x-0 z-30 `}
        >
          <div className=' sidebar flex flex-col sticky top-5 justify-between p-3 text-white'>
            <div className='flex justify-between mb-1'>
              <h1>Menu</h1>
              <span
                className='cursor-pointer lg:hidden hover:text-pink-400'
                onClick={() => setShow(!show)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 19l-7-7 7-7'
                  />
                </svg>
              </span>
            </div>

            <NavLinks setShow={setShow} show={show} />
          </div>
        </div>
        <div className='flex-1'>
          <header className='bg-black h-14 flex items-center justify-center text-white pl-3 '>
            <span
              className='hover:cursor-pointer hover:text-pink-400 lg:hidden'
              onClick={() => setShow(!show)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </span>
            <div className='flex-1 text-center sticky top-0 z-10'></div>
            <Search />
          </header>
          {children}

          {/* <footer className='flex items-center justify-center w-full h-24 border-t'>
          <a
            className='flex items-center justify-center'
            href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Powered by{" "}
            <img src='/vercel.svg' alt='Vercel Logo' className='h-4 ml-2' />
          </a>
        </footer> */}
        </div>
      </div>
    </>
  );
};

export default Layout;
