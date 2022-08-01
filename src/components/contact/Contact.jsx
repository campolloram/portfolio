import React from 'react'
import './contact.css'
import {AiTwotoneMail} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiTwotoneMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>campollo.ram@gmail.com</h5>
            <a href="mailto:campollo.ram@gmail.com">Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact