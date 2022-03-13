import { useState, useEffect } from "react";
import { server } from "../config";
import axios from "axios";
import Link from "next/link";

const NavLinks = ({ setShow, show }) => {
  const [links, setLinks] = useState([]);
  // const getLinks = async () => {
  //   const links = await axios
  //     .get(`${server}/categories`)
  //     .then((res) => res.data);
  //   setLinks(links);
  // };

  // useEffect(() => {
  //   getLinks();
  // }, []);
  return (
    <>
      <Link href='/'>
        <div
          className='bg-pink-400 rounded p-2 cursor-pointer mb-1'
          onClick={() => setShow(!show)}
        >
          Home
        </div>
      </Link>
      <Link href='/about'>
        <div
          className='bg-pink-400 rounded p-2 cursor-pointer mb-1'
          onClick={() => setShow(!show)}
        >
          About
        </div>
      </Link>
      <Link href='/contact'>
        <div
          className='bg-pink-400 rounded p-2 cursor-pointer mb-1'
          onClick={() => setShow(!show)}
        >
          Contact
        </div>
      </Link>
      <Link href='/react'>
        <div
          className='bg-pink-400 rounded p-2 cursor-pointer mb-1'
          onClick={() => setShow(!show)}
        >
          React
        </div>
      </Link>
      <Link href='/python'>
        <div
          className='bg-pink-400 rounded p-2 cursor-pointer mb-1'
          onClick={() => setShow(!show)}
        >
          Python
        </div>
      </Link>
    </>
  );
};

export default NavLinks;
