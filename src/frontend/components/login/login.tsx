import { Input } from 'postcss';
import { useEffect, useState } from 'react';
import * as React from 'react';
import { TestInput } from './styled';

export default (): JSX.Element => {
  const [isOn, setIsOn] = useState(false);
  useEffect(() => {
    console.log('test');
  }, []);
  // return <TestInput hasHover />;
  return (
    <div className='min-h-screen flex items-center justify-center bg-black bg-opacity-90 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full'>
        <div>
          <img
            className='mx-auto h-12 w-auto'
            src='https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg'
            alt='Workflow'
          />
          {/* <h2 className='mt-6 text-center text-3xl leading-9 font-extrabold dark:text-white'>Sign in</h2> */}
        </div>
        <form className='mt-8' action='#' method='POST'>
          <input type='hidden' name='remember' value='true' />
          <div className='rounded-md shadow-sm'>
            <div>
              <input
                aria-label='Email address'
                name='email'
                type='email'
                className='bg-black bg-opacity-30 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-400 text-white rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-gray-400 focus:z-10 sm:text-sm sm:leading-5'
                placeholder='Email address'
              />
            </div>
            <div className='-mt-px'>
              <input
                aria-label='Password'
                name='password'
                type='password'
                required
                className='bg-black bg-opacity-30 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-400 text-white rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-gray-400 focus:z-10 sm:text-sm sm:leading-5'
                placeholder='Password'
              />
            </div>
          </div>

          <div className='mt-6 flex items-center justify-between'>
            <div className='flex items-center'>
              <input
                id='remember_me'
                type='checkbox'
                className='form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out'
              />
              <label htmlFor='remember_me' className='ml-2 block text-sm leading-5 text-white'>
                Remember me
              </label>
            </div>

            <div className='text-sm leading-5'>
              <a
                href='#'
                className='font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150'
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div className='mt-6'>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out'
            >
              <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                <svg
                  className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
