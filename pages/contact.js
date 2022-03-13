const Contact = () => {
  return (
    <div className='flex flex-col items-center  py-2'>
      <form
        action='https://formsubmit.co/tommy_kelly@icloud.com'
        method='POST'
        className='w-full max-w-lg mt-2 px-4 py-4'
      >
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-first-name'
            >
              Full Name
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              id='grid-first-name'
              type='text'
              placeholder='Full Name'
              name='name'
              required
            />
            {/* <p className='text-red-500 text-xs italic'>
              Please fill out this field.
            </p> */}
          </div>
          <div className='w-full md:w-1/2 px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-last-name'
            >
              Email
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-last-name'
              type='email'
              placeholder='Email Address'
              name='email'
              required
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              Message
            </label>
            <textarea
              className='appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-password'
              required
              placeholder='Your Message'
              name='message'
            />
          </div>
        </div>

        <input
          type='submit'
          value='Submit'
          className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow cursor-pointer'
        />
      </form>
    </div>
  );
};

export default Contact;
