import React, { useState } from 'react'
import Image from 'next/image'
import { SearchIcon, MenuIcon, UserCircleIcon, GlobeAltIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/dist/client/router'

import DatePicker from './DatePicker'


const Header = () => {
  const router = useRouter()
  const [ searchInput, setSearchInput ] = useState('')



  const handleSearchState = (e) => {
    const searchText = e.target.value
    setSearchInput(searchText)
  }

  return (
    <div className='sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:px-10'>
      {/* logo */}
      <div 
        onClick={() => router.push('/')}
        className="relative flex items-center h-9 cursor-pointer my-auto">
        <Image src='https://res.cloudinary.com/drfgkfzk2/image/upload/v1628164047/airbnb-clone/airbnbicon2_rt0m83.webp' 
        layout='fill' 
        objectFit='contain'
        objectPosition='left'   
      />
      </div>  
      {/* menu */}
      <div className='flex items-center md:border-2 rounded-full md:shadow-sm' >
        <input 
          className='flex-grow pl-5 bg-transparent outline-none' 
          type="text" 
          placeholder='Where are you going?'
          value={searchInput}
          onChange={ (e) => handleSearchState(e)}
        />
        <SearchIcon className='hidden h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:inline-flex md:mx-1'/>
      </div>      
      {/* user icon */}
      <div className='flex space-x-4 items-center justify-end' >
        <p className='hidden md:inline-flex cursor-pointer' >become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer' />
        <div className='flex border-2 space-x-2 p-2 items-center rounded-full' >
          <MenuIcon className='h-6 cursor-pointer' />
          <UserCircleIcon className='h-6 cursor-pointer' />
        </div>
      </div>
      { 
        searchInput && <DatePicker setSearchInput={setSearchInput} />
      }
    </div>
  )
}

export default Header
