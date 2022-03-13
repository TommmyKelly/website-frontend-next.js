import Link from "next/link";

const Cards = ({ posts }) => {
  return (
    <div className='flex flex-wrap items-center justify-evenly  mt-1 sm:w-full'>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/${post.slug}`}>
            <div className='flex flex-col items-center justify-center mt-32 '>
              <div className='flex flex-col shadow-md cursor-pointer w-96 hover:-translate-y-1 duration-300'>
                {/* <!-- Preview --> */}
                <div className='inline relative group h-48'>
                  {/* <!-- Thumbnail --> */}
                  <img
                    className='absolute rounded-t object-cover h-full w-full'
                    src={post.image_url}
                    alt={`${post.category.category} tutorial image`}
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
                    {post.video_title}
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

                  {/* <!-- Body --> */}
                  <div className='flex flex-row mt-2 '>
                    {/* <!-- Detail Column --> */}

                    {/* <!-- Button Column --> */}
                    <div className='flex flex-row flex-auto justify-end'>
                      {/* <!-- Cart Button --> */}

                      {/* <!-- Preview Link Button --> */}
                      <a
                        className='flex text-xs border px-3 my-auto py-2 
                  border-amber-500 group hover:bg-amber-500 
                  rounded-xss
                  transition-all duration-200 items-center justify-center'
                      >
                        <div
                          className='text-xxs text-amber-700 font-semibold 
                      group-hover:text-blue-500 delay-100 '
                        >
                          View
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
    </div>
  );
};

export default Cards;
