import { countries, toCelsius } from './Extras'
import Spinner from './Spinner'

function Card(props) {
  const { weather } = props

  if (props.loading)
    return (
      <div className="card">
        <Spinner state={props.loading} />
      </div>
    )

  if (props.error) return <div className="card">Erro!</div>

  const time = new Date()

  return (
    <div className="card">
      <header className="card__header">
        <div className="card__city">
          <h1>{weather.name}</h1>
          <span>{countries[weather.country]}</span>
        </div>

        <span className="card__time">
          {`${time.getHours()}:${String(time.getMinutes()).padStart(2, '0')}`}
        </span>
      </header>

      <div className="card__temperature">
        <h3>{toCelsius(weather.temperature.temp)}ºC</h3>
        <span>Sensação: {toCelsius(weather.temperature.feels_like)}ºC</span>
        <div className="card__temperature--details">
          <div>
            <i className="fa-solid fa-snowflake"></i>
            <span>{toCelsius(weather.temperature.temp_min)}ºC</span>
          </div>
          <div>
            <i className="fa-solid fa-fire"></i>
            <span>{toCelsius(weather.temperature.temp_max)}ºC</span>
          </div>
        </div>
      </div>

      <div className="card__sun">
        <span>Sol</span>
        <div className="card__sun--wrapper">
          <div className="card__sun__item">
            <i className="fa-regular fa-sun"></i>

            <div className="sunrise">
              <span>Nascimento</span>
              <span>
                {new Date(weather.sunrise * 1000).toLocaleTimeString('pt-BR')}
              </span>
            </div>

            {/* <span>3 horas atrás</span> */}
          </div>
          <div className="card__sun__item">
            <i className="fa-regular fa-moon"></i>

            <div className="sunset">
              <span>Pôr-do-sol</span>
              <span>
                {new Date(weather.sunset * 1000).toLocaleTimeString('pt-BR')}
              </span>
            </div>

            {/* <span>Em 2 horas</span> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
