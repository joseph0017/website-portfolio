import Contact from './components/Contact';
import About from './components/About';
import Hero from './components/Hero';
import Project from './components/Project';
import Skills from './components/Skills';
import Navbar from './components/navbar';
import Container from './components/Container';

function App () {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Container />
      <About />
      <Container />
      <Skills />
      <Container />
      <Project />
      <Container />
      <Contact />
    </div>
  );
}

export default App;
