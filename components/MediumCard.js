import React from 'react'
import Image from 'next/image'

const MediumCard = ({img, title}) => {
  return (
    <div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out' >
        <div className='relative h-80 w-80' >
          <Image 
            src={img}
            layout='fill'
            objectFit='contain'
            className='rounded-md'
          />
      </div>
      <h3 className='text-2xl' >{title}</h3>
    </div>
  )
}

export default MediumCard
