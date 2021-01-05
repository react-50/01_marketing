import { useState } from 'react'
import { Transition } from '@headlessui/react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <nav className='bg-pink-100 '>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-center h-16'>
          <p className='mr-4 font-extrabold text-pink-500'>It's your</p>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            {/* <!-- Mobile menu button--> */}
            <button
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-expanded='false'
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className='sr-only'>Open main menu</span>
              {/* <!-- Icon when menu is closed. -->
          <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          --> */}

              <svg
                className='block h-6 w-6'
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
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              {/* <!-- Icon when menu is open. -->
          <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          --> */}
              <svg
                className='hidden h-6 w-6'
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
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='flex-shrink-0 flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='48'
              height='48'
              viewBox='0 0 48 48'
            >
              <title>cake-slice</title>
              <g>
                <path
                  fill='#d1a06f'
                  d='M45.88 40.9h-43.89a1 1 0 0 1-0.99-1v-19.95c0-3.11 1.36-6.22 3.73-8.51 3.01-2.92 7.59-4.46 13.22-4.46 0.14 0 0.27 0.03 0.39 0.09l27.93 11.96a1 1 0 0 1 0.61 0.92v19.95a1 1 0 0 1-1 1z'
                ></path>
                <path fill='#DDBE99' d='M1 29.92h45.88v2h-45.88z'></path>
                <path
                  fill='#f0ada2'
                  d='M46.28 19.04l-27.93-11.97a0.99 0.99 0 0 0-0.39-0.09c-5.63 0-10.21 1.54-13.23 4.46-2.37 2.29-3.74 5.39-3.73 8.51a1 1 0 0 0 1 1h6.98a2 2 0 0 1 1.99 1.99v6.99a2.99 2.99 0 1 0 5.99 0v-6.99a2 2 0 0 1 1.99-1.99h26.94a1 1 0 0 0 0.39-1.91z'
                ></path>
              </g>
            </svg>
          </div>
          <p className='ml-4 font-extrabold text-pink-500'>Day!!!</p>
        </div>
      </div>

      {/* <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  --> */}
    </nav>
  )
}
