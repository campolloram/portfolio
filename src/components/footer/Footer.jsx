import React from 'react'
import './footer.css'
import {RiLinkedinFill} from 'react-icons/ri'
import {AiFillGithub} from 'react-icons/ai'
import {SiLeetcode} from 'react-icons/si'
import {BsStackOverflow} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Campollo</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/campollo/" target="_blank"><RiLinkedinFill/></a>
        <a href="https://github.com/campolloram/" target="_blank"><AiFillGithub/></a>
        <a href="https://leetcode.com/Kushiim/" target="_blank"><SiLeetcode/></a>
        <a href="https://stackoverflow.com/users/10543433/kushim" target="_blank"><BsStackOverflow/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Campollo. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer