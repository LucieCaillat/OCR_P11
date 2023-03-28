import { useState } from 'react'
import './dropdown.css'

export default function Dropdown({ children, title }){
  const [isOpen, updateState] = useState(false)

  return <div className='dropdown'>
    <div className="dropdown_title" onClick={()=> {updateState(!isOpen)}}>
      <h2>{title}</h2>
      <i className={`fa-solid ${isOpen? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
    </div>
    <div className={`dropdown_text ${!isOpen ? "hidden" : ""}`}>
      {children}
    </div>
  </div>
}