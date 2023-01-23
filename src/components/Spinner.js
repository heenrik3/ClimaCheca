function Spinner(props) {
  return (
    <div className="spinner">
      <span
        className={'loader ' + (props.state ? 'loader__active' : '')}
      ></span>
    </div>
  )
}

export default Spinner
