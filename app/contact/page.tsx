import Button from '@/components/Button'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col  items-center bg-feature-bg bg-no-repeat py-10 lg:min-h-[530x]'>
      <h1 className='font-bold text-2xl mb-4'>
        Feel Free To Contact Us
      </h1>
      <div className='w-full max-w-md'>
        <form className='bg-white border-blue-50 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'> 
              Name:
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              type='text'
              placeholder='Enter Your Name'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
              Email:
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              placeholder='Enter Your Email'
            />
          </div>
          
          <div className='flex items-center justify-between'>
           <Button type='button' title='Submit' variant='btn_green'/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page
