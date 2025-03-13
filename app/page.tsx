'use client'

import React from 'react'
import Bell from './assets/Vector.svg';
import BellBack from './assets/Ellipse 195.svg';
import BellRing1 from './assets/Ellipse 196.svg';
import BellRing2 from './assets/Ellipse 197.svg';
import BellRing3 from './assets/Ellipse 198.svg';
import Button from './assets/button.png';
import Image from 'next/image'
import { toast } from 'react-toastify';




const page = () => {
  const handleClick = () => {
    toast('here is your notification', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
  }
  return (
    <div className='flex justify-center items-center'>
      <div>
        <p className='font-[500] p-[32px] text-center'>Hola!</p>
        <div className='flex items-center justify-center'>
          <Image className='relative' src={BellRing3} alt='bell-ring'></Image>
          <Image className='absolute' src={BellRing2} alt='bell-ring'></Image>
          <Image className='absolute' src={BellRing1} alt='bell-ring'></Image>
          <Image className='absolute' src={BellBack} alt='bell-back'></Image>
          <Image className='absolute' src={Bell} alt='bell'></Image>
        </div>
        <div className='py-[60px] text-center'>
          <p className='font-[700] text-[29px] '>Lorem Ipsum...</p>
          <p className='font-[400] text-[19px] opacity-[60%]'>Lorem ipsum dolor sit amet.</p>


          <button className='pt-[52px]' onClick={handleClick}>
            <Image src={Button} alt='button'></Image>
          </button>
        </div>

      </div>
    </div>
  )
}

export default page