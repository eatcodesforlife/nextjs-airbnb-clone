import React from 'react'
import { v4 as uuid4 } from 'uuid'

const Footer = ({footerData}) => {
 
  return (
    <footer className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
      {
        footerData?.map(({ title, footerLinks }) => (
          <section key={uuid4()} 
            className='space-y-4 text-sm text-gray-800'
          >
            <h3 className='font-bold' > {title} </h3>
            <ul className='space-y-4' >
              {
                footerLinks?.map( links => (
                  <li
                    className='cursor-pointer hover:underline' 
                    key={uuid4()}>
                    {links}
                  </li>
                ))
              }
            </ul>
          </section>
        ))
      }
    </footer>
  )
}

export default Footer

export const getServerSideProps = async() => {

  const getFooterData = await fetch('https://jsonkeeper.com/b/C0KE')
  const footerData = await getFooterData.json()

  return {
    props: {
      footerData
    }
  }
}