'use client'

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

interface PropertyMapProps {
  lat: number
  lng: number
  title: string
}

export function PropertyMap({ lat, lng, title }: PropertyMapProps) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  })

  const center = { lat, lng }

  if (!isLoaded) {
    return <div className="h-80 bg-zinc-100 dark:bg-zinc-900 rounded-2xl flex items-center justify-center">Loading map...</div>
  }

  return (
    <div className="map-container h-80 w-full rounded-2xl overflow-hidden">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
        center={center}
        zoom={15}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
        }}
      >
        <Marker position={center} title={title} />
      </GoogleMap>
    </div>
  )
}
