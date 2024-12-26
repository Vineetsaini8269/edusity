import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt='' className='about_img'/>
            <img src={play_icon} alt='' className='play_icon' onClick={() => {
                setPlayState(true) }}/>
        </div>

        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tommorrow's Leaders Today</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum 
                rs porro ratione neque et consequatur ea voluptate,
                sedita. Maxime dolores alias ad sed similique 
                architecto minus sit delectus amet .
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum 
                reicabo deleniti cum, sapiente fuga? Molestiae
                enim fugiat doloremque expedita. Maxime dolores alias ad sed similique 
                architecto minus sit delectus amet .
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum 
                recusandae corporis nobis accusamus nostrum iure adipisci veniam.
                 expedita. Maxime dolores alias ad sed similique 
                architecto minus sit delectus amet .
            </p>
        </div>
      
    </div>
  )
}

export default About;
