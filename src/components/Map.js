// import { useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

// import Spinner from './Spinner'

function Map(props) {
  const { weather } = props
  // if (!weather) return <h1>No map</h1>

  // if (props.state) {
  //   return (
  //     <div className="map">
  //       <Spinner state={props.state} />
  //     </div>
  //   )
  // }

  const position = [weather.coords.lat, weather.coords.lon]

  return (
    <div className="map">
      <span className="title">Mapa</span>
      <div className="map-container">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  )
}

export default Map
