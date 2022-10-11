import React, { useMemo, useCallback, useRef } from "react"
import { GoogleMap, Marker } from "@react-google-maps/api"

export default function MapOffice({ office, center, zoom }) {
  
  const styleMapContainer = {
    width: '100%',
    height: '100%',
    minHeight: '400px',
    outline: '1px solid #c5c5c5'
  }
 
  // Map Options
  const options = useMemo(
    () => ({
      zoomControl: true,
    }), []
  )
  
  // Map Reference
  const mapRef = useRef()
  const onMapLoad = useCallback((map) => {
    mapRef.current = map
  }, [])
   
  return (
    <div className="map" style={{ backgroundColor: '#fff', outline: '1 px solid #c5c5c5' }}>
      <GoogleMap 
        mapContainerStyle={styleMapContainer}
        center={center} 
        zoom={zoom} 
        options={options}
        onLoad={onMapLoad}
      >
        <Marker 
          position={{ 
            lat: office.field_geolocation.lat, 
            lng: office.field_geolocation.lng
          }} 
        />
      </GoogleMap>
    </div>
  )
}