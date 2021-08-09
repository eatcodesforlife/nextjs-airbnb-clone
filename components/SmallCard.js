import React from 'react'
import Image from 'next/image'

const SmallCard = ({ img, location, distance}) => {
  return (
    <div className='flex items-center m-2 mt-6 rounded-xl space-x-4 cursor-pointer bg-gray-100 hover:scale-105 transition transform duration-200 ease-out' >
      <div className='relative h-16 w-16' >
        <Image
          className='rounded-lg' 
          src={img}
          layout='fill'
          objectFit='contain'
          objectPosition='center'
        />
      </div>
      <div>
        <h3>{location}</h3>
        <h3>{distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard
