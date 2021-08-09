import React from 'react'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import SmallCard from './SmallCard'
import MediumCard from './MediumCard'
import LargeCard from './LargeCard'

const Main = ({ explorePlaces, liveAnywhereData }) => {

  return (
    <main className='max-w-md mx-auto px-8 pb-20 sm:px-16'>
      <section className='pt-6' >
        <h2 className='text-4xl' >Explore Nearby</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ' >
          {
            explorePlaces.map( places  => {
              return (
                <SmallCard key={uuidv4()} 
                    {...places} 
                />   
              )
            })
          }
        </div>
      </section>
      <section className='relative' >
        <h2 className='text-4xl font-semibold py-8' >Live Anywhere</h2>
        <div className='flex space-x-3 overflow-x-scroll scrollbar-hide p-3 -ml-3' >
          {
            liveAnywhereData.map( places => (
              <MediumCard key={places.id} {...places} />
            ))
          }  
        </div>
      </section>
      <section>
        <LargeCard />
      </section>
    </main>
  )
}

export default Main
