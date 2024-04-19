import React from 'react'
import './Backdrop.css'

const Backdrop = ({ show, closed }) => {
  return (
    <div
      className={`backdrop ${show ? 'open' : 'closed'}`}
      onClick={closed}
    ></div>
  )
}

export default Backdrop
