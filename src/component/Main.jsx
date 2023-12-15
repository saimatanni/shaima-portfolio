import React from 'react'
import About from './mainPages/About'
import Facts from './mainPages/Facts'
import Skills from './mainPages/Skills'
import Resumie from './mainPages/Resumie'
import Portfolio from './mainPages/Portfolio'
import Service from './mainPages/Service'
import Testimonial from './mainPages/Testimonial'
import Contact from './mainPages/Contact'

const Main = () => {
  return (
    <div id='main'>
        <About/>
        <Facts/>
        <Skills/>
        <Resumie/>
        <Portfolio/>
        {/* <Service/> */}
        {/* <Testimonial/> */}
        <Contact/>
    </div>
  )
}

export default Main