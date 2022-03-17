import { useState } from "react";

const Layout2 = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <div className='flex min-h-screen min-w-full bg-gray-200 '>
      <div
        className={`w-64 bg-black absolute transition duration-200 transform ${
          show ? "translate-x-0" : "-translate-x-full"
        } h-screen  lg:relative  lg:translate-x-0 z-30`}
      ></div>
      <div className='flex-1 '>
        <div className=''>{children}</div>
      </div>
    </div>
  );
};

export default Layout2;
