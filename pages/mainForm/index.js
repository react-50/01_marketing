import postcards from '../../assets/postcards/postcards'

import { marketing } from '../../utils/firebase/firebase'
export default function MainForm(props) {
  console.log('item', props)
  return (
    <div className='py--16 bg-white  lg:py--24'>
      <div className='relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl'>
        <svg
          className='hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4'
          width='404'
          height='784'
          fill='none'
          viewBox='0 0 404 784'
          aria-hidden='true'
        >
          <defs>
            <pattern
              id='b1e6e422-73f8-40a6-b5d9-c8586e37e0e7'
              x='0'
              y='0'
              width='20'
              height='20'
              patternUnits='userSpaceOnUse'
            >
              <rect
                x='0'
                y='0'
                width='4'
                height='4'
                className='text-gray-200'
                fill='currentColor'
              />
            </pattern>
          </defs>
          <rect
            width='404'
            height='784'
            fill='url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)'
          />
        </svg>

        <div className='relative'>
          <h2 className='text-center text-3xl leading-8 font-extrabold tracking-tight text-pink-600 sm:text-4xl'>
            Send A Postcard!
          </h2>
          <p className='mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            magnam voluptatum cupiditate veritatis in, accusamus quisquam.
          </p>
        </div>

        <div className='relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center'>
          <div className='relative'>
            <h3 className='text-2xl font-extrabold text-pink-500 tracking-tight sm:text-3xl'>
              Pick your CakeCard, write your message, we'll hand write it and
              send it!
            </h3>
            <div className='bg-white'>
              <div className='mx-auto py-2 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-2 mt-4'>
                <div className='space-y-12'>
                  <ul className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'>
                    {postcards.map((card) => {
                      return (
                        <li key={card.id}>
                          <a onClick={() => console.log('clicked')}>
                            <div className='space-y-4'>
                              <div className='aspect-w-3 aspect-h-2'>
                                <img
                                  className='object-cover shadow-lg rounded-lg'
                                  src={card.image}
                                  alt={card.alt}
                                />
                              </div>
                            </div>
                          </a>
                        </li>
                      )
                    })}
                    {/* <!-- More people... --> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <form
            action='#'
            method='POST'
            className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
          >
            <div>
              <label
                htmlFor='first_name'
                className='block text-sm font-medium text-gray-700'
              >
                First name
              </label>
              <div className='mt-1'>
                <input
                  type='text'
                  name='first_name'
                  id='first_name'
                  autoComplete='given-name'
                  className='py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='last_name'
                className='block text-sm font-medium text-gray-700'
              >
                Last name
              </label>
              <div className='mt-1'>
                <input
                  type='text'
                  name='last_name'
                  id='last_name'
                  autoComplete='family-name'
                  className='py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                />
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Email
              </label>
              <div className='mt-1'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  className='py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-gray-700'
              >
                Message
              </label>
              <div className='mt-1'>
                <textarea
                  id='message'
                  name='message'
                  rows='4'
                  className='py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                ></textarea>
              </div>
            </div>
            <div className='sm:col-span-2'>
              <button
                type='submit'
                className='w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-500 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Send Your Post Card!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const ref = firestore.doc('01marketing')
  const item = (await ref.get()).data()

  return {
    props: { item },
  }
}
