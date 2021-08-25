import React from 'react'
import Image from 'next/image'
import largeImage from '../assets/hostairbnb.webp'

const LargeCard = () => {
  return (
     <article className='relative flex flex-col-reverse h-screen lg:block lg:h-96' >      
      <div className='relative h-3/6 lg:h-full'>
        <Image src={largeImage} 
          layout='fill'
          objectFit='cover'
          className='rounded-bl-2xl rounded-br-2xl lg:rounded-2xl'      
        />
      </div>      
      <div className='bg-gray-800 h-3/6 pt-5 flex flex-col items-center px-5 rounded-tl-2xl rounded-tr-2xl lg:h-96 lg:absolute lg:top-32 lg:left-12 lg:bg-transparent lg:p-0 lg:place-items-start' >
        <h2 className='text-white text-4xl font-semibold mb-3 text-center lg:w-64 lg:text-left' >Try hosting</h2>
        <p className='text-lg  lg:w-[300px] text-white text-center lg:text-left' >Earn extra income and unlock new opportunities by sharing your space.</p>
        <button className='bg-gray-100 text-gray-900 px-4 py-2 rounded-lg mt-5 max-w-md ' >Learn more</button>
      </div>
    </article>
  )
}

export default LargeCard
