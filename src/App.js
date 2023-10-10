import Contact from './components/Contact';
import About from './components/About';
import Hero from './components/Hero';
import Project from './components/Project';
import Skills from './components/Skills';
import Navbar from './components/navbar';

function App () {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
