import './App.scss';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Portfolio from './components/Portfolio/Portfolio';

const App = () => (
  <>
    <Header />
    <NavBar />
    <About />
    <Experience />
    <Portfolio />
    <Contact />
    <Footer />
  </>
);

export default App;
