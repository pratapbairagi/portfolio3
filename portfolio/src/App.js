
import './App.css';
import Header from './copmonents/header/header';
import About from './sections/about';
import Hero from './sections/hero';
import Qualification from './sections/qualification';
import Skills from './sections/skills';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Qualification/>
    </div>
  );
}

export default App;
