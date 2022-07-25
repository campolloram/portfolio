import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {DiPython} from 'react-icons/di'
import {DiJavascript1} from 'react-icons/di'
import {DiReact} from 'react-icons/di'

const About = () => {
  return (
    <section id="about">
       <h5> This is me...</h5>
        <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me2">
          <div className="about__me-image">
            <img src={ME} alt="me-about"/>
          </div>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <DiPython className="about__icon"/>
              <h5>Python</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
              <DiJavascript1 className="about__icon"/>
              <h5>Java Script</h5>
              <small>1+ Years Working</small>
            </article>
            <article className='about__card'>
              <DiReact className="about__icon"/>
              <h5>React</h5>
              <small>1+ Years Working</small>
            </article>
          </div>
          <p>
          👋 <br/> My name is Guillermo Campollo and I'm a sofware developer | Data Engineer from Mexico. This is my portfolio where you can see other projects I'm currently working on as well as a little bit about me.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
        </div>
      </div>
    </section>
  )
}

export default About