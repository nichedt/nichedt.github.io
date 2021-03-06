import * as React from 'react';
import { Component } from 'react';

export const Home = () => {
  return (
    <div className='min-h-screen bg-black bg-opacity-90 overflow-hidden'>
      <nav className='bg-black bg-opacity-30'>
        <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
          <div className='relative flex items-center justify-between h-16'>
            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
              <button
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                </svg>

                <svg
                  className='hidden h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>
            <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
              <div className='flex-shrink-0 flex items-center'>
                <img
                  className='block h-8 w-auto'
                  src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                  alt='Workflow'
                />
              </div>
              <div className='hidden sm:block sm:ml-6'>
                <div className='flex space-x-4'>
                  <a href='#' className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>
                    Home
                  </a>
                  <a
                    href='#'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  >
                    About
                  </a>
                  <a
                    href='#'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  >
                    Posts
                  </a>
                  <div className='inline-flex rounded-sm shadow'>
                    <a
                      href='#'
                      className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700'
                    >
                      Create
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
              <button className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                <span className='sr-only'>View notifications</span>
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                  />
                </svg>
              </button>
              <div className='ml-3 relative'>
                <div>
                  <button
                    className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                    id='user-menu'
                    aria-haspopup='true'
                  >
                    <span className='sr-only'>Open user menu</span>
                    <img
                      className='h-8 w-8 rounded-full'
                      src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                  </button>
                </div>
                <div
                  className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5'
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='user-menu'
                >
                  <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100' role='menuitem'>
                    Your Profile
                  </a>
                  <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100' role='menuitem'>
                    Settings
                  </a>
                  <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100' role='menuitem'>
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden sm:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            <a href='#' className='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'>
              Home
            </a>
            <a
              href='#'
              className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              About
            </a>
            <a
              href='#'
              className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              Posts
            </a>
            <a
              href='#'
              className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              Calendar
            </a>
          </div>
        </div>
      </nav>
      <div className='px-4 py-12 lg:px-0 text-white'>
        <div className='flex flex-col max-w-screen-sm mx-auto justify-content'>
          <div className='flex flex-col space-y-24'>
            <div className='flex flex-col space-y-8 md:items-center'>
              <div className='flex flex-col space-y-2 md:items-center md:text-center'>
                <h1 className='text-5xl font-bold'>Nicholas Tan</h1>
                <p className='text-lg py-2'>
                  I'm an electrial engineer, mathematician, and writer, living in the San Francisco Bay Area. I’m
                  currently a firmware engineer at 
                </p>
              </div>
            </div>
            <div className='flex flex-col w-full timeline-container'>
              <div className='flex items-center mt-4 mb-4 timeline-item'>
                <p className='text-lg font-bold'>January, 2021</p>
                <div className='flex-1 h-px ml-4 bg-gray-700 timeline-stroke'></div>
              </div>
              <a className='py-3' href='#'>
                <h3 className='font-semibold text-green-300'>Sample Blog Post</h3>
                <p className='text-md font-normal text-white py-1'>
                  I am developing this website, and needed a brief summary for this sample blog post. Check it out
                </p>
                <p className='text-sm font-medium text-gray-400'>Updated 1 week ago &middot; 5 min read</p>
              </a>
              <a className='py-3' href='#'>
                <h3 className='font-semibold text-green-300'>Sample Blog Post 2</h3>
                <p className='text-md font-normal text-white py-1'>
                  I am developing this website, and needed a brief summary for this sample blog post number 2. Check it
                  out if you can!
                </p>
                <p className='text-sm font-medium text-gray-400'>Updated 2 weeks ago &middot; 2 min read</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
