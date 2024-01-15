
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
