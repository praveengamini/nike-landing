import React from 'react'
import Button from './Button'
import { shoe8 } from '../assets/images'
const SuperQuality = () => {
  return (
    <div id="about-us"
    className="flex justify-between items-center max-lg:flex-col gap-10
    w-full max-container">
      <div className='flex flex-1 flex-col'>
      <h2 className='font-palanquin text-4xl capitalize  font-bold lg:max-w-lg'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
          We Provide You
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Super Quality</span> Shoes
        </h2>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className='mt:6 lg:max-w-lg info-text'> 
        Our dedication to detail and excellence ensures your satisfaction
        </p>
        <Button label='View Details' />
      </div>
      <img src={shoe8} alt="shoe8" width={570} height={522} className='object-contain'  />
    </div>
  )
}

export default SuperQuality
