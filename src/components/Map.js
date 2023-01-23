import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function Map(props) {
  const { weather } = props

  const position = [weather.coords.lat, weather.coords.lon]

  return (
    <div className="map">
      <span className="title">Local</span>
      <div className="map-container">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          // zoomControl={false}
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
