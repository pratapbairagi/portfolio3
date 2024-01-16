
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

function App() {
  
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
  }
},[])

  return (
    <div className="App">
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
