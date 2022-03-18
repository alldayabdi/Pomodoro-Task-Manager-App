import React from 'react'

const Button = ({title, toggled, calledFunction}) => {
  return (
   <button className={toggled} onClick = {calledFunction}>
       {title}
   </button>
  )
}

export default Button