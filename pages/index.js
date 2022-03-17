import Head from "next/head";
import { server } from "@/config/index";
import { useRouter } from "next/router";
import Meta from "@/components/Meta";
import Cards from "@/components/Cards";

const Home = ({ videos }) => {
  const router = useRouter();

  return (
    <>
      <Meta />
      <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>
        <h1 className='text-6xl font-bold text-center'>
          Coding <span className='text-blue-600'>Tutorials</span>
        </h1>

        <Cards posts={videos} />
      </div>
    </>
  );
};
export async function getStaticProps() {
  const res = await fetch(`${server}/videos`);
  const videos = await res.json();

  return {
    props: {
      videos,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/videos`);

//   const videos = await res.json();

//   return {
//     props: {
//       videos,
//     },
//   };
// };
export default Home;
