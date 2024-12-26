import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure better education for a better world</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit doloribus ad eius earum perspiciatis consequuntur totam commodi, veniam quia in iste ipsa qui sed ratione aperiam ullam enim necessitatibus voluptate modi eaque culpa porro reprehenderit repellendus atque! Corporis nostrum minima eum, nihil, natus facilis eius sed consectetur nulla, repellendus culpa.</p>
            <button className='btn'> Explore more <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero
