import React from 'react'

const Buttons = (title, toggled, calledFunction) => {
  return (
   <button className={toggled} onClick = {calledFunction}>
       {title}
   </button>
  )
}

export default Buttons