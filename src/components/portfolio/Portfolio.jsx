import React from 'react'
import './portfolio.css'
import DALI from '../../assets/dali_persistencia.jpg'
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={DALI} alt="Search for Art"/>
          </div>
            <h2>Search for Art</h2>
            <div className='portfolio__item-cta'>
              <Link to="/search-for-art" className='new-btn btn' target="_blank">Check it out!</Link>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio