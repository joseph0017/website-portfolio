import Contact from './pages/Contact';
import About from './pages/About';
import Hero from './pages/Hero';
import Project from './pages/Project';
import Skills from './pages/Skills';
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
