import { useMemo, useCallback, useRef, useEffect } from "react"
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api"
//import { navigate } from "gatsby"

export default function Map({ allOffices, center, setCenter, zoom, setZoom, nearbyOffices, setNearbyOffices, findNearestOffice }) {
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBB4CvVPT2yxac4JWz2DsaguUnMh8wxKcI',
    libraries: ["places"],
  })

  // Map Style
  const styleMapContainer = {
    width: '100%',
    height: '100%',
    minHeight: '400px',
    outline: '1px solid #c5c5c5'
  }

  // Map Options
  const options = useMemo(
    () => ({
      //disableDefaultUI: true,
      zoomControl: false,
      //clickableIcons: false
    }), []
  )

  // Center Map position on User if Browser's Geolocation is available
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        findNearestOffice(position.coords.latitude, position.coords.longitude)    
      }) 
    } 
  }, [])
  
  // Map Reference
  const mapRef = useRef()
  const onMapLoad = useCallback((map) => {
    mapRef.current = map
  }, [])

  // Render placeholder if JS not loaded
  if (!isLoaded){ 
    return (
      <div style={{ backgroundColor: '#c5c5c5', height: '440px', width: '100%' }} />
    )
  } 

  return (
      <GoogleMap 
        mapContainerStyle={styleMapContainer}
        zoom={zoom} 
        center={center} 
        options={options}
        onLoad={onMapLoad}
      >
        {allOffices.map((office, index) => (
          <Marker 
            key={index} 
            title={office.title}
            position={{ 
              lat: office.field_geolocation.lat, 
              lng: office.field_geolocation.lng
            }} 
            //onClick={()=>{navigate(office.node.path.alias)}}
          >
          </Marker>
        ))}
      </GoogleMap>
    
  )
}