import React, { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { UsersIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/dist/client/router';
import { getRouteMatcher } from 'next/dist/next-server/lib/router/utils';


const DatePicker = ({ setSearchInput }) => {
  const router = useRouter()
  const [ startDate, setStartDate ] = useState(new Date())
  const [ endDate, setEndDate ] = useState(new Date())
  const [ numberOfGuests, setNumberOfGuests ] = useState(1)

  const selectionRange = {
      startDate : startDate,
      endDate: endDate,
      key: 'selection',
    }

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
   }

  const search = () => {
    router.push('/search')
  }
  return (
    <div className='flex flex-col col-span-3 mx-auto mt-2' >
      <DateRangePicker
        minDate={new Date()}
        ranges={[selectionRange]}
        rangeColors={['#FF385C']}
        onChange={handleSelect}
      />
      <div className='flex items-center mb-4 ' >
        <h2 className='text-2xl flex-grow font-semibold ' >Number of guests</h2>
        <UsersIcon className='h-5' />
        <input 
          min={1}
          type='number'  
          className='w-12 pl-2 text-lg outline-none text-red-500' 
          value={numberOfGuests}
          onChange={(e) => setNumberOfGuests(e.target.value)}
        />
      </div>
      <div className='flex' >
        <button className='flex-grow text-gray-500 '
          onClick={()=> setSearchInput('')}
        >Cancel</button>
        <button 
          className='flex-grow text-red-500' 
          onClick={search}
        >Search</button>
      </div>
    </div>
  )
}

export default DatePicker
