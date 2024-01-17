
import { useEffect } from 'react';
import './App.css';
import Footer from './copmonents/footer/footer';
import Header from './copmonents/header/header';
import About from './sections/about';
import Contact from './sections/contact';
import Hero from './sections/hero';
import Projects from './sections/projects';
import Qualification from './sections/qualification';
import Services from './sections/services';
import Skills from './sections/skills';
import Testimonial from './sections/testimonial';

import ScrollReveal from "scrollreveal";

function App() {
  let sr = ScrollReveal({
    origin : "top",
    distance : "80px",
    duration : 2500,
    delay : 400,
    // reset : true /* repeat animation */ 
  })
    useEffect(()=>{
      let sections = document.querySelectorAll("section");
  window.onscroll = () => {

    let scrollY = window.pageYOffset;
  
    sections.forEach((element )=> {
      
      let sectionHeight = element.offsetHeight
      let sectionTop = element.offsetTop - 30
      let sectionId = element.getAttribute("id")
      let sectionClass = document.querySelector(`#nav li a[href*=${sectionId}]`)

      // remove or hide nav bar on scroll
      document.getElementById("nav").classList.remove("active_nav")

      if( scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          sectionClass?.classList.add("active_link")
      }
      else{
        sectionClass?.classList.remove("active_link")
      }

    })
  };

  sr.reveal(".hero_container .grid .content:nth-child(2), .skills_container .grid > div:nth-child(1), .qualification_container .grid > div:nth-child(1), .contact_container .grid > div:nth-child(1)", {origin : "left"})
  sr.reveal(".hero_container .grid .content:nth-child(1), .skills_container .grid > div:nth-child(2), .qualification_container .grid > div:nth-child(2), .contact_container .grid > div:nth-child(2)", {origin : "right"})
  sr.reveal(".about_container .grid, .services_container .grid, .projects_container .mySwiper, .testimonial_container .grid")
  sr.reveal(".footer_container .grid", {origin : "bottom", delay:"200"})


},[])

  return (
    <div className="App" style={{overflowX:"hidden"}}>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Qualification/>
      <Services/>
      <Projects/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
