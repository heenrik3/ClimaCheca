import { useState, useRef } from 'react'

const week = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
]

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
]

const seconds = 2.0
let counter = 0.0
let timer

function Header(props) {
  const date = new Date()

  const [typing, setTyping] = useState(false)
  const searchTextInput = useRef()

  function activeCounter(text) {
    counter = 0.0

    if (timer) clearInterval(timer)

    timer = setInterval(() => {
      counter += 0.1

      if (counter >= seconds) {
        clearInterval(timer)
        setTyping(false)
        if (text) props.onSearch(text)

        searchTextInput.current.value = ''
        searchTextInput.current.blur()
      }
    }, 100)
  }

  function handleOnChange(e) {
    setTyping(true)
    activeCounter(e.target.value)
  }

  return (
    <header className="header">
      <span className="logo">climacheca</span>
      <div className="header__time">
        <h3>{months[date.getMonth()] + ' ' + date.getFullYear()}</h3>
        <span>
          {`${week[date.getDay()]}, ${date.getDate()} ${months[
            date.getMonth()
          ].slice(0, 3)}, ${date.getFullYear()}`}
        </span>
      </div>

      <div className="header__input">
        <input
          type="text"
          placeholder="Pesquise uma cidade..."
          onChange={handleOnChange}
          ref={searchTextInput}
          disabled={props.disabled}
        ></input>

        {typing ? <i className="rotating fa-solid fa-circle-notch"></i> : null}
      </div>
    </header>
  )
}

export default Header
