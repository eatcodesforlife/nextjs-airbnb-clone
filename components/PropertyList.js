import Image from 'next/image'
import React from 'react'

const PropertyList = ({ img, title, description, star, price, long, lat}
) => {
  return (
    <div>
      <div className='relative h-24 w-40' >
        <Image 
          src={img}
          layout='fill'
          objectFit='cover'
          className=''
        />
        {title}
      </div>
    </div>
  )
}

export default PropertyList
