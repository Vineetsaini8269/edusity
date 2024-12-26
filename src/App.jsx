import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campuses from './Components/Campuss/Campuses'
import Testomonial from './Components/Testomonials/Testomonial'
import Contact from './Components/Contacts/Contact'
import Footer from './Components/footer/Footer'
// import VedioPlayer from './Components/vedioplayers/VedioPlayer'

const App = () => {

  const [playState , setPlayState] = useState(false);

  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className="container">
          <Title subTitle="Our Program" title ='What We Offer'/>
          <Programs/>
          <About setPlayState ={setPlayState}/>
          <Title subTitle="Gallery" title ='Campus Photos'/>
          <Campuses/>
          <Title subTitle="TESTOMONIALS" title ='What Student Says'/>
          <Testomonial/>
          <Title subTitle="Contact Us" title ='Get in Touch'/>
          <Contact/>
          <Footer/>
        </div>
        {/* <VedioPlayer playState= {playState} setPlayState= {setPlayState} /> */}
    </div>
  )
}

export default App
