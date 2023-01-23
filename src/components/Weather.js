function Weather(props) {
  const { weather } = props

  return (
    <div className="weather">
      <span className="title">Clima agora em {weather.name}</span>

      <div className="weather__info">
        <div className="weather__item">
          <i className="weather__icon fa-solid fa-wind"></i>
          <div className="weather__details">
            <span>Velocidade do Vento</span>
            <span>{weather.wind} metros/s</span>
          </div>
        </div>
        <div className="weather__item">
          <i className="weather__icon fa-regular fa-eye"></i>
          <div className="weather__details">
            <span>Visibilidade</span>
            <span>
              {weather.visibility === 10000
                ? 'Total'
                : `${weather.visibility} km`}
            </span>
          </div>
        </div>
        <div className="weather__item">
          <i className="weather__icon fa-solid fa-cloud"></i>
          <div className="weather__details">
            <span>Pressão Atmosférica</span>
            <span>{weather.pressure} hPa</span>
          </div>
        </div>
        <div className="weather__item">
          <i className="weather__icon fa-solid fa-water"></i>
          <div className="weather__details">
            <span>Umidade</span>
            <span>{weather.humidity} %</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
