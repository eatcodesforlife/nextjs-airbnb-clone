import React, { useEffect, useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter'
import RoomIcon from '@material-ui/icons/Room'
import 'mapbox-gl/dist/mapbox-gl.css';


const MAP_STYLE_URL = process.env.MAP_STYLE_URL
const MAP_ACCESS_TOKEN = process.env.MAP_ACCESS_TOKEN

const Map = ({propertyList, coordinates}) => {
    
  const { latitude, longitude } = getCenter(coordinates)
  
  const [viewport, setViewport] = useState({});

  useEffect(() => {
    setViewport({
      width: 800,
      height: 1200,
      longitude,
      latitude,
      zoom: 10,
    })
  }, [coordinates])
  
  const [ selectedProperty, setSelectedProperty ] = useState('')
  
  
  return (
    <div className="sticky h-screen">
      <ReactMapGL
        mapStyle={MAP_STYLE_URL}
        mapboxApiAccessToken={MAP_ACCESS_TOKEN}
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        {
          propertyList.map( ({title, price, long, lat}) =>(
            <div key={long}>
              <Marker
                longitude={long}
                latitude={lat}
                onClick={() => setSelectedProperty(price)}
              >
                <p className='text-red-500 cursor-pointer  '
                  aria-label='map-marker'
                >
                  <RoomIcon />
                </p>
              </Marker>
              { selectedProperty === price && <Popup
                longitude={long}
                latitude={lat}
                onClose={() => setSelectedProperty('')}
                closeOnClick={true}
                className='ml-2.5 mt-5'                
              >
                <p className='font-medium px-2'>${price}</p>
              </Popup> }
            </div>
          ))
        }
      </ReactMapGL>  
    </div>
  )
}

export default Map
