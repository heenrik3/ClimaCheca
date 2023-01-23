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
          <span>{weather.country}</span>
        </div>

        <span className="card__time">
          {`${time.getHours()}:${String(time.getMinutes()).padStart(2, '0')}`}
        </span>
      </header>

      <div className="card__temperature">
        <div className="card__temperature--main">
          <h3>{weather.temperature.now}ºC</h3>
          <span>Sensação: {weather.temperature.feels}ºC</span>
          <span>{weather.description}</span>
        </div>

        <picture className="card__pic">
          <img
            className="card__img"
            src={`/images/${weather.art}`}
            alt={'weather indicator'}
          ></img>
        </picture>
      </div>

      <div className="card__details">
        <div>
          <i className="fa-solid fa-snowflake"></i>
          <span>{weather.temperature.min}ºC</span>
        </div>
        <div>
          <i className="fa-solid fa-fire"></i>
          <span>{weather.temperature.max}ºC</span>
        </div>
      </div>

      <div className="card__sun">
        <span>Sol</span>
        <div className="card__sun--wrapper">
          <div className="card__sun__item">
            <i className="fa-regular fa-sun"></i>

            <div className="sunrise">
              <span>Nasce</span>
              <span>{weather.sunrise}</span>
            </div>

            {/* <span>3 horas atrás</span> */}
          </div>
          <div className="card__sun__item">
            <i className="fa-regular fa-moon"></i>

            <div className="sunset">
              <span>Pôe</span>
              <span>{weather.sunset}</span>
            </div>

            {/* <span>Em 2 horas</span> */}
          </div>
        </div>
      </div>

      <footer className="footer" style={{ textAlign: 'center' }}>
        Desenvolvido por Henrique
      </footer>
    </div>
  )
}

export default Card
