import { useState, useEffect } from 'react'

import Header from './components/Header'
// import Weather from './components/Weather'
// import Map from './components/Map'
import MainWeather from './components/MainWeather'
import Card from './components/Card'
import { parseAPIData } from './components/Extras'

import './sass/main.sass'

function App() {
  const [loading, setLoading] = useState(false)
  const [weather, setWeather] = useState({})
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const url = process.env.REACT_APP_API_COORDS.replace(
          '<LAT>',
          pos.coords.latitude
        ).replace('<LON>', pos.coords.longitude)

        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setWeather(parseAPIData(data))
            setLoading(false)
          })
          .catch((err) => {
            setLoading(false)
            setError(true)
          })
      })
    } else {
      setLoading(false)
      setError(true)
      return
    }
  }, [])

  function handleOnSearch(query) {
    setLoading(true)
    setError(false)

    const url = process.env.REACT_APP_API_CITY.replace('CITY', query)

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        setWeather(parseAPIData(data))
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
        setError(true)
      })
  }

  return (
    <div className="app">
      <main className="main">
        <section>
          <Header onSearch={handleOnSearch} disabled={loading} />
          <MainWeather
            loading={loading}
            weather={weather}
            error={error || Object.keys(weather).length < 1}
          />
        </section>
        <section>
          <Card
            loading={loading}
            weather={weather}
            error={error || Object.keys(weather).length < 1}
          />
        </section>
      </main>
    </div>
  )
}

export default App

// new Date(Date.now()).toLocaleString('pt-BR')
