import React from 'react'
import Image from 'next/image'
import largeImage from '../assets/lakeandboat.webp'

const LargeCard = () => {
  return (
    <article className='relative h-96 py-16' >
      <div>
        <Image src={largeImage} 
          layout='fill'
          objectFit='cover'
          className='rounded-2xl'
        />
      </div>
      <div className='absolute top-32 left-12  ' >
        <h2 className='text-4xl mb-3 w-64' >The Greatest Outdoors</h2>
        <p className='text-sm' >Wishlist curated by Airbnb.</p>
        <button className='bg-gray-900 text-white px-4 py-2 rounded-lg mt-5 max-w-md ' >Get inspired</button>
      </div>
    </article>
  )
}

export default LargeCard
