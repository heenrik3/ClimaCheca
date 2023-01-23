import { useState, useEffect } from 'react'

import Header from './components/Header'
import MainWeather from './components/MainWeather'
import Card from './components/Card'
import { fetchByCityName, fetchByPosition } from './components/Extras'

import './sass/main.sass'

function App() {
  const [loading, setLoading] = useState(false)
  const [weather, setWeather] = useState({})
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetcher = async () => {
      setLoading(true)
      setError(false)

      async function onGeoSuccess(pos) {
        const data = await fetchByPosition(pos)
        setWeather(data)
        setLoading(false)
      }
      function onGeoFail() {
        setLoading(false)
        setError(true)
      }

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail)
      } else {
        setLoading(false)
      }
    }

    fetcher()
  }, [])

  async function handleOnSearch(query) {
    setLoading(true)
    setError(false)

    const data = await fetchByCityName(query)

    if (!data) {
      setLoading(false)
      setError(true)
      return
    }

    setLoading(false)
    setWeather(data)
  }

  const fetchError = Object.keys(weather).length < 1

  return (
    <div className="app">
      <main className="main">
        <section>
          <Header onSearch={handleOnSearch} disabled={loading} />
          <MainWeather
            loading={loading}
            weather={weather}
            error={error || fetchError}
          />
        </section>
        <section>
          <Card
            loading={loading}
            weather={weather}
            error={error || fetchError}
          />
        </section>
      </main>
    </div>
  )
}

export default App
