import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUser} from 'react-icons/fa'
import {SiKnowledgebase} from 'react-icons/si'
import {MdHomeRepairService} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  function GetClassName(href) {
    return href === activeNav ? "active" : ""
  }

  return (
    <nav>
      <a href="#" className={GetClassName("#")} onClick={() => {setActiveNav("#")}}><AiFillHome/></a>
      <a href="#about" className={GetClassName("#about")} onClick={() => {setActiveNav("#about")}}><FaUser/></a>
      <a href="#experience" className={GetClassName("#experience")} onClick={() => {setActiveNav("#experience")}}><SiKnowledgebase/></a>
      <a href="#services" className={GetClassName("#services")} onClick={() => {setActiveNav("#services")}}><MdHomeRepairService/></a>
    </nav>
  )
}

export default Nav