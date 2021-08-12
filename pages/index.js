import Head from 'next/head'
import Hero from '../components/Hero'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

const Home = ({ explorePlacesData, liveAnywhereData, footerData }) => {

  return (
    <div>
      <Head>
        <title>AirBnB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Main 
        explorePlaces={explorePlacesData}
        liveAnywhereData={liveAnywhereData}
      />
      <Footer footerData={footerData} />
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const resPlaces = await fetch('https://jsonkeeper.com/b/23D3')
  const explorePlacesData = await resPlaces.json()

  const getFooterData = await fetch('https://jsonkeeper.com/b/C0KE')
  const footerData = await getFooterData.json()


  const resLiveAnywhere = await fetch('https://jsonkeeper.com/b/JBFV')
  const liveAnywhereData = await resLiveAnywhere.json()


  return {
    props: {
      explorePlacesData,
      liveAnywhereData,
      footerData
    }
  }
}