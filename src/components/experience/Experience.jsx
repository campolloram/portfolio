import React from 'react'
import './experience.css'
import {TbCircleCheck} from 'react-icons/tb'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What are my main skills?</h5>
      <h2>Experience</h2>
      <div className='container experience__container'>
        <div className="experience__web">
          <h3>Web Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <TbCircleCheck className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <TbCircleCheck className="experience__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <TbCircleCheck className="experience__details-icon"/>
              <div>
                <h4>Java Script</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <TbCircleCheck className="experience__details-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <TbCircleCheck className="experience__details-icon"/>
              <div>
                <h4>Django</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <TbCircleCheck className="experience__details-icon"/>
              <div>
                <h4>Celery</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <TbCircleCheck className="experience__details-icon"/>
              <div>
                <h4>Git</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience__data'>
          <h3>Data Engineering</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <TbCircleCheck className="experience__details-icon"/>
              <div>
                <h4>Pyton</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <TbCircleCheck className="experience__details-icon"/>
              <div>
                <h4>Spark</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <TbCircleCheck className="experience__details-icon"/>
              <div>
                <h4>Airflow</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <TbCircleCheck className="experience__details-icon"/>
              <div>
                <h4>AWS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <TbCircleCheck className="experience__details-icon"/>
              <div>
                <h4>SQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience