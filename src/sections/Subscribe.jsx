import React from 'react'
import Button from './Button'
const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center
    max-lg:flex-col gap-10"
    id="contact-us">
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquiun
      font-bold'>
        Sign Up for <span className="text-coral-red ">
         Updates
      </span> & NewsLetter
      </h3>
      <div className='lg:max-w-[40%]
      w-full flex items-center max-sm:flex-col
      gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full
      '>
        <input type="text" placeholder='subscribe@nike.com'
        className='input' />
        <Button label="Sign-Up"
        fullWidth
        />
      </div>
      
    </section>
  )
}

export default Subscribe
