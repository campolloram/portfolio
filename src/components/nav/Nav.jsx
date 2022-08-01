import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUser} from 'react-icons/fa'
import {SiKnowledgebase} from 'react-icons/si'
import {MdHomeRepairService} from 'react-icons/md'
import {AiOutlineContacts} from 'react-icons/ai'
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
      <a href="#portfolio" className={GetClassName("#portfolio")} onClick={() => {setActiveNav("#portfolio")}}><MdHomeRepairService/></a>
      <a href="#contact" className={GetClassName("#contact")} onClick={() => {setActiveNav("#contact")}}>
        <AiOutlineContacts/>
      </a>
    </nav>
  )
}

export default Nav