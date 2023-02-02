
import Head from 'next/head'
import Hero from '../components/Hero'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'


const Home = ({ explorePlacesData, liveAnywhereData, footerData, activities }) => {

  
  return (
    <div>
      <Head>
        <title>AirBnB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-gray-50'>
        <Header />
        <Hero />
        <Main 
          explorePlaces={explorePlacesData}
          liveAnywhereData={liveAnywhereData}
          activities={activities}
          className='bg-white'
        />      
        <Footer footerData={footerData} />
      </div>
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  
  

  const resPlaces = await fetch('https://react-projects-api.up.railway.app/places')
  const explorePlacesData = await resPlaces.json()

  const getFooterData = await fetch('https://react-projects-api.up.railway.app/footer')
  const footerData = await getFooterData.json()


  const resLiveAnywhere = await fetch('https://react-projects-api.up.railway.app/liveAnywhere')
  const liveAnywhereData = await resLiveAnywhere.json()

  const getActivitiesData = await fetch('https://react-projects-api.up.railway.app/activities')
  const activities = await getActivitiesData.json()

  return {
    props: {
      explorePlacesData,
      liveAnywhereData,
      footerData,
      activities
    }
  }
}