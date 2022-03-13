import { useState, useEffect } from "react";
import { server } from "../../config";
import axios from "axios";
import Link from "next/link";

const NavLinks = ({ setShow, show }) => {
  const [links, setLinks] = useState([]);
  const getLinks = async () => {
    const links = await axios
      .get(`${server}/categories`)
      .then((res) => res.data);
    setLinks(links);
  };

  useEffect(() => {
    getLinks();
  }, []);
  return (
    <>
      {links.map((link) => (
        <Link key={link.id} href={`${link.category}`}>
          <div
            className='bg-pink-400 rounded p-2 cursor-pointer mb-1'
            onClick={() => setShow(!show)}
          >
            {link.category}
          </div>
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
