import Head from "next/head";
import { server } from "../config";
import { useRouter } from "next/router";
import Link from "next/link";
import Cards from "@/components/Cards";

export default function Home({ videos }) {
  const router = useRouter();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <h1 className='text-6xl font-bold'>
          Welcome to{" "}
          <a className='text-blue-600' href='https://nextjs.org'>
            Next.js!
          </a>
        </h1>

        <Cards posts={videos} />
      </main>
    </div>
  );
}

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
