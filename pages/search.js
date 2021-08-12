import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PropertyList from '../components/PropertyList'

const footerLinks = 'https://jsonkeeper.com/b/C0KE'

const propertyData = 'https://jsonkeeper.com/b/4GI2'

const Search = ({footerData, propertyList}) => {
  
const btnText = [ 'Cancellation policy', 'Type of place', 'Price', 'Rooms and Beds', 'More filters']

  return (
    <div>
      <Header />
      <main className='max-w-md mx-auto flex' >
        <section className='flex-grow' >
          <p className='text-xs' > 500+ stays for 5 number of guests</p>
          <h1 className='text-3xl font-semibold mt-2 mb-6' >Stays in Mars</h1>
          <div className='flex' >
            <button className='button'>Cancellation policy</button>
            <button className='button'>Type of place</button>
            <button className='button'>Price</button>
            <button className='button'>Rooms and Beds</button>
            <button className='button'>More filters</button>
          </div>
          <div className='flex flex-col' >
            {
              propertyList.map( property => (
                <PropertyList key={property.lat} {...property}/>
              ))
            }
          </div>
        </section>        
      </main>
      <Footer footerData={footerData} />
    </div>
  )
}

export default Search


export const getServerSideProps = async() => {
  
  const footerData = await fetch(footerLinks).then( res => res.json())

  const propertyList = await fetch(propertyData).then( res => res.json())

  

  return {
    props: {
      propertyList,
      footerData
    }
  }
}
