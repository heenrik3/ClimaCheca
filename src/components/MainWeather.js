import { Fragment } from 'react'
import Weather from './Weather'
import Map from './Map'

import Spinner from './Spinner'

function MainWeather(props) {
  const { weather } = props

  if (props.loading) {
    return <Spinner state={props.loading} />
  }

  if (props.error) {
    return (
      <div className="weather">
        <h1>Algum erro ocorreu ou cidade inserida não existe!</h1>
      </div>
    )
  }

  return (
    <Fragment>
      <Weather weather={weather} />
      <Map weather={weather} />
    </Fragment>
  )
}

export default MainWeather
