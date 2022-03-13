import Head from "next/head";
import { server } from "../config";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home({ videos }) {
  const router = useRouter();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Link href='/[slug]' as={"/react"}>
        click here ...
      </Link>

      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <h1 className='text-6xl font-bold'>
          Welcome to{" "}
          <a className='text-blue-600' href='https://nextjs.org'>
            Next.js!
          </a>
        </h1>

        <p className='mt-3 text-2xl'>
          Get started by editing{" "}
          <code className='p-3 font-mono text-lg bg-gray-100 rounded-md'>
            pages/index.js
          </code>
        </p>

        <div className='flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full'>
          {videos.map((video) => (
            <div key={video.id}>
              <Link href={`/${video.slug}`}>
                <div className='flex flex-col items-center justify-center mt-32 '>
                  <div className='flex flex-col shadow-md cursor-pointer w-96 hover:-translate-y-1 duration-300'>
                    {/* <!-- Preview --> */}
                    <div className='inline relative group h-48'>
                      {/* <!-- Thumbnail --> */}
                      <img
                        className='absolute rounded-t object-cover h-full w-full'
                        src={video.image_url}
                        alt='Product Preview'
                      />

                      {/* <!-- Hover Bar --> */}
                      <div
                        className='flex flex-row absolute justify-end
                      h-16 w-full bottom-0 px-3 space-x-2
                      bg-none opacity-0 group-hover:opacity-100
                      group-hover:bg-gradient-to-t from-black/20 via-gray-800/20 to-transparent 
                      transition-all ease-in-out duration-200 delay-100'
                      ></div>
                    </div>

                    {/* <!-- Body --> */}
                    <div className='flex flex-col bg-white rounded-b p-3'>
                      {/* <!-- Title --> */}
                      <div className='text-sm font-semibold text-gray-900 hover:underline truncate'>
                        {video.video_title}
                      </div>

                      {/* <!-- Author - Category --> */}
                      <div className='text-xxs text-gray-400 truncate mt-1'>
                        by
                        {/* <!-- Author --> */}
                        <a className='font-semibold hover:underline'>
                          {" "}
                          EgoistDeveloper{" "}
                        </a>
                        in
                        {/* <!-- Category --> */}
                        <a className='font-semibold hover:underline'>
                          {" "}
                          e-commerce{" "}
                        </a>
                      </div>

                      {/* <!-- Price --> */}
                      <div className='text-sm text-gray-600 font-bold mt-4 mb-1'>
                        $23
                      </div>

                      {/* <!-- Body --> */}
                      <div className='flex flex-row mt-2'>
                        {/* <!-- Detail Column --> */}
                        <div className='flex flex-col flex-auto'>
                          {/* <!-- Rating --> */}
                          <div className='flex flex-row group'>
                            <i
                              className='mdi mdi-star text-xs text-amber-400 
                              hover:text-amber-500 transition-all duration-200'
                              title='Worst'
                            ></i>

                            <i
                              className='mdi mdi-star text-xs text-amber-400 
                              hover:text-amber-500 transition-all duration-200'
                              title='Bad'
                            ></i>

                            <i
                              className='mdi mdi-star text-xs text-amber-400 
                              hover:text-amber-500 transition-all duration-200'
                              title='Not Bad'
                            ></i>

                            <i
                              className='mdi mdi-s  {/* <!-- Product Card --> */}tar text-xs text-amber-400 
                              hover:text-amber-500 transition-all duration-200'
                              title='Good'
                            ></i>

                            <i
                              className='mdi mdi-star text-xs text-amber-400 
                              hover:text-amber-500 transition-all duration-200'
                              title='Awesome'
                            ></i>

                            <div className='text-xxs text-gray-400 ml-1 hover:underline'>
                              (45)
                            </div>
                          </div>

                          {/* <!-- Statistic --> */}
                          <div
                            className='text-xxs text-gray-400 mt-1'
                            title='34k Downlaods in this year'
                          >
                            34k Downloads
                          </div>
                        </div>

                        {/* <!-- Button Column --> */}
                        <div className='flex flex-row flex-auto justify-end'>
                          {/* <!-- Cart Button --> */}
                          <a
                            className='flex text-xs border px-3 my-auto py-2 mr-2
                          border-amber-500 group hover:bg-amber-500 
                          rounded-xss
                          transition-all duration-200'
                          >
                            {/* <!-- Icon --> */}
                            <i
                              className='mdi mdi-cart-outline text-amber-700
                              group-hover:text-white delay-100'
                            ></i>
                          </a>

                          {/* <!-- Preview Link Button --> */}
                          <a
                            className='flex text-xs border px-3 my-auto py-2 
                          border-amber-500 group hover:bg-amber-500 
                          rounded-xss
                          transition-all duration-200'
                          >
                            {/* <!-- Icon --> */}
                            <i
                              className='mdi mdi-eye-outline text-amber-700
                              group-hover:text-white delay-100'
                            ></i>

                            {/* <!-- Text --> */}
                            <div
                              className='text-xxs text-amber-700 font-semibold ml-2
                              group-hover:text-white delay-100'
                            >
                              Live Preview
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          {/* <a
            href='https://nextjs.org/docs'
            className='p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600'
          >
            <h3 className='text-2xl font-bold'>Documentation &rarr;</h3>
            <p className='mt-4 text-xl'>
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href='https://nextjs.org/learn'
            className='p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600'
          >
            <h3 className='text-2xl font-bold'>Learn &rarr;</h3>
            <p className='mt-4 text-xl'>
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a> */}

          {/* <a
            href='https://github.com/vercel/next.js/tree/master/examples'
            className='p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600'
          >
            <h3 className='text-2xl font-bold'>Examples &rarr;</h3>
            <p className='mt-4 text-xl'>
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className='p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600'
          >
            <h3 className='text-2xl font-bold'>Deploy &rarr;</h3>
            <p className='mt-4 text-xl'>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>

      <footer className='flex items-center justify-center w-full h-24 border-t'>
        <a
          className='flex items-center justify-center'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{" "}
          <img src='/vercel.svg' alt='Vercel Logo' className='h-4 ml-2' />
        </a>
      </footer>
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
