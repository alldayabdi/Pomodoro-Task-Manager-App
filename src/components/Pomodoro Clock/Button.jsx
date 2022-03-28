const Button = ({title,activeClass, _callback}) => {

  // Functions will be passed down here to determine if the clock is running
  return (
      <button className={activeClass} onClick={_callback}>{title}</button>
    )
}
export default Button