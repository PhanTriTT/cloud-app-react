import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
      <div className='max-w-[1280px] mx-auto'>
        <div className='text-center'>
          <h2 className='font-bold text-5xl'>
            Trusted by developers across the world
          </h2>
          <p className='text-gray-500 text-3xl py-6'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
            facilis explicabo, aut quae nemo laborum tempore officiis possimus
            eum quidem.
          </p>
        </div>
        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
          <div className='border py-8 rounded-xl shadow-xl'>
            <p className='text-6xl text-indigo-600 font-bold'>100%</p>
            <p className='mt-2 text-gray-400'>Completion</p>
          </div>
          <div className='border py-8 rounded-xl shadow-xl'>
            <p className='text-6xl text-indigo-600 font-bold'>24/7</p>
            <p className='mt-2 text-gray-400'>Delivery</p>
          </div>
          <div className='border py-8 rounded-xl shadow-xl'>
            <p className='text-6xl text-indigo-600 font-bold'>100K</p>
            <p className='mt-2 text-gray-400'>Transactions</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
