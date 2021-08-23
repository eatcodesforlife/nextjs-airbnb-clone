import React from 'react'
import Image from 'next/image'


const MediumCardsTwo = ({ title, img, description, isFeatured }) => {
  return (
    <div className='flex-grow mx-auto cursor-pointer hover:scale-105 transition transform duration-300 ease-out' >
        <div className='relative h-72 w-72 md:h-80 md:w-80 lg:w-96 lg:h-96' >
            <Image 
            src={img}
            layout='fill'
            objectFit='contain'
            className='rounded-md '
            />          
          {isFeatured && <span className='absolute bg-white px-2 py-1 rounded text-xs font-semibold top-5 left-5' >
            FEATURED
          </span> }
      </div>
      <h3 className='text-2xl' >{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default MediumCardsTwo
