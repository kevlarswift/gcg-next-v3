import React from 'react'
import { useLoadScript } from '@react-google-maps/api'
import MapOffice from "./mapOffice"

export default function MapWrapper({ office, center, zoom }) {
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: [process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY],
    libraries: ["places"],
  })
  if (!isLoaded) return (
    <div style={{ backgroundColor: '#c5c5c5', height: '440px', width: '100%' }} />
  )
  return (
    <MapOffice office={office} center={center} zoom={zoom} />
  )
}
