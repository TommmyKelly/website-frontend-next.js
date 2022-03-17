import { useState } from "react";
import { useRouter } from "next/router";

export default function Search() {
  const [term, setTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/videos/search?term=${term}`);
    setTerm("");
  };
  return (
    <form
      className='sm:w-32 md:w-64 h-9 mr-2  justify-self-end'
      onSubmit={handleSubmit}
    >
      <input
        className='w-full h-full pl-3 py-1 box-border border-2 rounded-3xl text-black   border-gray-500'
        type='text'
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder='Search videos'
      />
    </form>
  );
}
