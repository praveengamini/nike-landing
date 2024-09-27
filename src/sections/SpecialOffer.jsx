import React from 'react'
import {offer} from '../assets/images/'
import Button from './Button'
import { arrowRight } from '../assets/icons'
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse
    gap-10 max-container">
        <div className='flex-1 '>
        <img src={offer} width={773} height={687}
        className="object-contain w-full"/>
        </div>
        <div className='flex flex-1 flex-col'>
      <h2 className='font-palanquin text-4xl capitalize  font-bold lg:max-w-lg'>
          <span className='text-coral-red inline-block mt-3'>Special Offer</span> Shoes
        </h2>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
        Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
          </p>
        <div className="mt-11 flex flex-wrap gap-4">

        <Button label='Shop now' icon={arrowRight} />
        <Button label='Learn more'
        backgoundColor="bg-white"
        borderColor = "border-slate-gray"
        textColor = "text-slate-gray"/>

        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
