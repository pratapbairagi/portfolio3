
import './App.css';
import Header from './copmonents/header/header';
import About from './sections/about';
import Hero from './sections/hero';
import Qualification from './sections/qualification';
import Services from './sections/services';
import Skills from './sections/skills';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Qualification/>
      <Services/>
    </div>
  );
}

export default App;
