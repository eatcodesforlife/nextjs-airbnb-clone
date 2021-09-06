import React from 'react'

const CityNotFound = ({ city }) => {
  return (
    <div className='h-96 flex flex-col justify-center'>
      <section>
        <h2>0 stays found in {city}</h2>
        <p>Please search "San Francisco", "New York", "London", "Dubai" or try refreshing the page.</p>
      </section>
    </div>
  )
}
 
export default CityNotFound
