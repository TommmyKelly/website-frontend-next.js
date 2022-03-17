import { useState } from "react";

const NavBar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "React", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-30'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div
          className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'
        >
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
            <ion-icon name='logo-ionic'></ion-icon>
          </span>
          Designer
        </div>

        <div
          onClick={() => setOpen(!open)}
          className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <li class='md:ml-8 text-xl md:my-0 my-7'>
            <div>
              <div class='dropdown relative'>
                <a
                  class='
          dropdown-toggle
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
          w-28
        '
                  href='#'
                  type='button'
                  id='dropdownMenuButton2'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Videos
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='caret-down'
                    class='w-2 ml-2'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 320 512'
                  >
                    <path
                      fill='currentColor'
                      d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'
                    ></path>
                  </svg>
                </a>
                <ul
                  class='
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        '
                  aria-labelledby='dropdownMenuButton2'
                >
                  <li>
                    <a
                      class='
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            '
                      href='#'
                    >
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      class='
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            '
                      href='#'
                    >
                      Another action
                    </a>
                  </li>
                  <li>
                    <a
                      class='
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            '
                      href='#'
                    >
                      Something else heresdfsdfsdfsfsfsfsfsdf
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a
                href={link.link}
                className='text-gray-800 hover:text-gray-400 duration-500'
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;