import Image from 'next/image'
import React from 'react'
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'

const PropertyList = ({ img, title, description, location, star, price, isSuperHost}
) => {

  return (
    <article className='flex py-7 px-2 border-b cursor-pointer hover:shadow-lg transition duration-200 ease-out first:border-t rounded-2xl'>
      <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0' >
        <Image 
          src={img}
          layout='fill'
          objectFit='cover'
          className='transition duration-200 hover:opacity-80 rounded-lg'
        />
        {
          isSuperHost && <span className='absolute bg-white px-2 py-1 rounded text-xs font-semibold top-5 left-5 shadow' >
            SUPERHOST
          </span> 
        }
      </div>
      <div className='flex flex-col flex-grow pl-5'>
        <div className='flex justify-between' >
          <p>{location}</p>
          <HeartIcon className='h-7 cursor-pointer'/>
        </div>
        <h4 className='text-xl' >{title}</h4>
        <div className='border-b w-10 pt-2' />
        <p className='flex-grow pt-2 text-sm text-gray-500' >{description}</p>
        <div className='flex justify-between items-end pt-5' >
          <p className='flex items-center' >
            <StarIcon 
            className='h-5 text-red-400' />
            {star}
          </p>
          <div >
            <p className='text-lg font-semibold pt-2 lg:text-2xl' >${price}/night</p>
            <p className='text-right font-extralight' >$250 total</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default PropertyList
