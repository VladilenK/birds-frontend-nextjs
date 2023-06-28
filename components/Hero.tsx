"use client";

import Image from 'next/image'

import CustomButton from './CustomButton'

const Hero = () => {
  const handleScroll = () => {

  }
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>Find a bird</h1>  
        <p className="hero__subtitle">
          Millions of photos of birds from all over the world.
        </p>
        <CustomButton 
          title="Explore birds"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src="/00050410501.jpg" alt="hero" fill className='object-contain' /> 
        </div>
        <div className='hero__image-overlay' />
      </div>
    </div>
  )
}

export default Hero