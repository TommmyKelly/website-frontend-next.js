const Contact = () => {
  return (
    <div className='flex flex-col items-center  py-2'>
      <form
        action='https://formsubmit.co/tommy_kelly@icloud.com'
        method='POST'
        class='w-full max-w-lg mt-2 px-4 py-4'
      >
        <div class='flex flex-wrap -mx-3 mb-6'>
          <div class='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label
              class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='grid-first-name'
            >
              Full Name
            </label>
            <input
              class='appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              id='grid-first-name'
              type='text'
              placeholder='Full Name'
              name='name'
              required
            />
            {/* <p class='text-red-500 text-xs italic'>
              Please fill out this field.
            </p> */}
          </div>
          <div class='w-full md:w-1/2 px-3'>
            <label
              class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='grid-last-name'
            >
              Email
            </label>
            <input
              class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-last-name'
              type='email'
              placeholder='Email Address'
              name='email'
              required
            />
          </div>
        </div>
        <div class='flex flex-wrap -mx-3 mb-6'>
          <div class='w-full px-3'>
            <label
              class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='grid-password'
            >
              Message
            </label>
            <textarea
              class='appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
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
