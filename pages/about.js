import Head from "next/head";
import router, { useRouter } from "next/router";

export default function Home({ res }) {
  const router = useRouter();

  return (
    <div className='flex flex-col items-center justify-center flex-1 py-2'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>{res}</div>
    </div>
  );
}
