import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[600px] xl:[700px]' >
      <Image src='https://res.cloudinary.com/drfgkfzk2/image/upload/v1628213768/airbnb-clone/airbnb-hero-img_edtqe7.webp' 
        layout='fill'
        objectFit='cover'
      />
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg' >Not sure where to go? Perfect.</p>
        <button className='text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold my-3 hover:shadow-lg active:scale-90 duration-150' >I am flexible.</button>
      </div>
    </div>
  )
}

export default Banner
