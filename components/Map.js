import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter'
import RoomIcon from '@material-ui/icons/Room'

const MAP_STYLE_URL = process.env.MAP_STYLE_URL
const MAP_ACCESS_TOKEN = process.env.MAP_ACCESS_TOKEN 

const Map = ({propertyList}) => {
  
  const coordinates = propertyList.map(({long, lat}) =>({
    longitude: long,
    latitude: lat
  }))

  const { latitude, longitude } = getCenter(coordinates)
  const [viewport, setViewport] = useState({   
    latitude,
    longitude,
    zoom: 10
  });
  const [ selectedProperty, setSelectedProperty ] = useState('')
 
  
  return (
    <>
      <ReactMapGL
        width="100%"
        height="100%"
        mapStyle={MAP_STYLE_URL}
        mapboxApiAccessToken={MAP_ACCESS_TOKEN}
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        {
          propertyList.map( ({title, long, lat}) =>(
            <div key={long}>
              <Marker
                longitude={long}
                latitude={lat}
                onClick={() => setSelectedProperty(title)}
              >
                <p className='text-red-500 animate-bounce  cursor-pointer'
                  aria-label='map-marker'
                >
                  <RoomIcon />
                </p>
              </Marker>
              { selectedProperty === title && <Popup
                longitude={long}
                latitude={lat}
                onClose={() => setSelectedProperty('')}
                closeOnClick={true}
              >
                {title}
              </Popup> }
            </div>
          ))
        }
      </ReactMapGL>      
    </>
  )
}

export default Map
