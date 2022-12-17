import React from 'react'
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2'>
      <div className='max-w-[1240px] grid grid-cols-2 md:grid-cols-6 mx-auto border-b-2 border-gray-600 py-8'>
        <div>
          <h6 className='font-bold pt-2 uppercase'>Solutions</h6>
          <ul>
            <li className='py-1'>Marketing</li>
            <li className='py-1'>Analytics</li>
            <li className='py-1'>Commerce</li>
            <li className='py-1'>Data</li>
            <li className='py-1'>Cloud</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold pt-2 uppercase'>Support</h6>
          <ul>
            <li className='py-1'>Marketing</li>
            <li className='py-1'>Analytics</li>
            <li className='py-1'>Commerce</li>
            <li className='py-1'>Data</li>
            <li className='py-1'>Cloud</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold pt-2 uppercase'>Company</h6>
          <ul>
            <li className='py-1'>Marketing</li>
            <li className='py-1'>Analytics</li>
            <li className='py-1'>Commerce</li>
            <li className='py-1'>Data</li>
            <li className='py-1'>Cloud</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold pt-2 uppercase'>Legal</h6>
          <ul>
            <li className='py-1'>Marketing</li>
            <li className='py-1'>Analytics</li>
            <li className='py-1'>Commerce</li>
            <li className='py-1'>Data</li>
            <li className='py-1'>Cloud</li>
          </ul>
        </div>
        <div className='col-span-2 pt-8 md:pt-2'>
          <p className='font-bold uppercase'>Subscribe to out newsletter</p>
          <p className='py-4'>
            The latest news,articles and resources sent to your inbox weekly.
          </p>
          <form className='flex flex-col sm:flex-row'>
            <input
              className='w-full mb-4 rounded-md mr-4 p-2'
              type='email'
              placeholder='Email address'
            />
            <button className='p-2 mb-4'>Subscribe</button>
          </form>
        </div>
      </div>

      <div className='flex flex-col max-w-[1240px] mx-auto px-2 py-4 justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2022 Workflow ,HCM. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
          <FaFacebook />
          <FaInstagram />
          <FaGithub />
          <FaTwitter />
          <FaTwitch />
        </div>
      </div>
    </div>
  )
}

export default Footer
