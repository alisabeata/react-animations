import React from 'react'
import './Modal.css'

const Modal = ({ show, closed }) => (
  <div className={`modal ${show ? 'open' : 'closed'}`}>
    <h1>A Modal</h1>
    <button className="button" onClick={closed}>
      Dismiss
    </button>
  </div>
)

export default Modal
