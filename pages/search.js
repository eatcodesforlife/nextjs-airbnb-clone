import { useState, useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Map from '../components/Map'
import PropertyList from '../components/PropertyList'
import CityNotFound from '../components/CityNotFound'


const Search = ({footerData, cities}) => {
  const [ cityPropertyList, setCityPropertyList ] = useState([])
  const [ isCityFound, setIsCityFound ] = useState(true)
  const [ coordinates, setCoordinates ] = useState([])

  const router = useRouter()

  const { 
    city, 
    startDate, 
    endDate, 
    numberOfGuests } = router.query 

  const range = `${startDate} to ${endDate}`  

  useEffect(() => {
    
    const noSpaceCityName = city.split(' ').join('').toLowerCase()

    const searchedCity = cities.find( search => Object.keys(search).toString() ===  noSpaceCityName)
    
    if( !searchedCity ){
      setIsCityFound(!isCityFound)
    }else{
      setCityPropertyList(searchedCity[noSpaceCityName])
    }
    
    
  }, [city])

  useEffect(() => {
    setCoordinates(
       cityPropertyList.map(({long, lat}) =>({
          longitude: long,
          latitude: lat
        }
      ))
    )
  },[cityPropertyList])
  


  return (
    <div>
      <Header placeholder={`${city} | ${startDate} - ${endDate} | ${numberOfGuests} guests `} />
      <main>
        {
          !isCityFound ? <CityNotFound city={city} cityPropertyList={cityPropertyList}/>
          :<div className='max-w-md mx-auto flex relative'>
            <section className='flex-grow ' >
              <p className='text-xs' > {cityPropertyList.length}+ stays - {range} - for {numberOfGuests} number of guests</p>
              <h1 className='text-3xl font-semibold mt-2 mb-6' >Stays in {city} </h1>
              <div className='flex' >
                <button className='button'>Cancellation policy</button>
                <button className='button'>Type of place</button>
                <button className='button'>Price</button>
                <button className='button'>Rooms and Beds</button>
                <button className='button'>More filters</button>
              </div>
              <div className='flex flex-col' >
                {
                  cityPropertyList.map( property => (
                    <PropertyList key={property.lat} 
                      {...property} 
                    />
                  ))
                }
              </div>
            </section>
            <section className='hidden lg:flex-grow lg:min-w-[600px] lg:inline-flex relative'>
              <Map propertyList={cityPropertyList} coordinates={coordinates}/>
            </section>
          </div>
        }        
      </main>
      <Footer footerData={footerData} />
    </div>
  )
}

export default Search


export const getServerSideProps = async() => {
  
  const footerData = await fetch('https://react-projects-api.up.railway.app/footer').then( res => res.json())
  
  const cities = await fetch('https://react-projects-api.up.railway.app/airbnb-clone-city-search-results').then( res => res.json())


  return {
    props: {
      footerData,
      cities
    }
  }
}
