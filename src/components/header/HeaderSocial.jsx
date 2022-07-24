import React from 'react'
import {RiLinkedinFill} from 'react-icons/ri'
import {AiFillGithub} from 'react-icons/ai'
import {SiLeetcode} from 'react-icons/si'
import {BsStackOverflow} from 'react-icons/bs'


const HeaderSocial = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/campollo/" target="_blank"><RiLinkedinFill/></a>
        <a href="https://github.com/campolloram/" target="_blank"><AiFillGithub/></a>
        <a href="https://leetcode.com/Kushiim/" target="_blank"><SiLeetcode/></a>
        <a href="https://stackoverflow.com/users/10543433/kushim" target="_blank"><BsStackOverflow/></a>
    </div>
  )
}

export default HeaderSocial