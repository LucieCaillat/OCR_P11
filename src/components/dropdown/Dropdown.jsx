import { useState } from 'react'
import chevron from '../../assets/chevron.png'
import './dropdown.css'

export default function Dropdown({ children, title }){
  const [isOpen, updateState] = useState(false)

  return <div className='dropdown'>
    <div className="dropdown_title" onClick={()=> {updateState(!isOpen)}}>
      <h2>{title}</h2>
      <img src={chevron} alt={"dropdown " + (isOpen ? "ouvert" : "fermé")} className={!isOpen? "chevron-down" : null}/>
    </div>
    <div className={"dropdown_text " + (!isOpen ? "hidden" : "")}>
      <p>{children}</p>
    </div>
  </div>
}