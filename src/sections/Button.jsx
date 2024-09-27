import React from 'react'
import { statistics } from '../constants'
const Button = ({label,icon,backgoundColor,borderColor,textColor,fullWidth }) => {
  return (
    <div>

<button className={`flex justify-center
  items-center
  gap-2
  px-7
  py-4
  border font-montserrat
  text-lg leading-none
  ${backgoundColor ? `${backgoundColor} ${textColor} ${borderColor}` : 'bg-coral-red'}
  rounded-full ${fullWidth && 'w-full'}`}>
            {label}
          {icon &&  <img src={icon} alt="arrow right icon" 
            className="
                ml-2 rounded-full 
                w-5 h-5"/>}
      </button>
       
    </div>
    
  )
}

export default Button
