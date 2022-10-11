import React from 'react'
import { useLoadScript } from '@react-google-maps/api'
import MapOffice from "./mapOffice"

export default function MapWrapper({ office, center, zoom }) {
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBB4CvVPT2yxac4JWz2DsaguUnMh8wxKcI',
    libraries: ["places"],
  })
  if (!isLoaded) return (
    <div style={{ backgroundColor: '#c5c5c5', height: '440px', width: '100%' }} />
  )
  return (
    <MapOffice office={office} center={center} zoom={zoom} />
  )
}
