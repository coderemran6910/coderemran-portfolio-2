import './app.scss';
import Banner from './components/banner/Banner';
import Contact from './components/contact/Contact';
import Navbar from './components/nabvar/navbar';
import Paralax from './components/paralax/Paralax';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
const App = () => {
  return <div>
    <section id='Home'>
      <Navbar />
      <Banner/>
    </section>

    <section id='Portfolio'>
      <Paralax type="portfolio" />
    </section>
      <Portfolio /> 

    <section id='Services'>
      <Paralax type="services" />
    </section>
   <Services/>
   
    <section id='Contact'>
      <Paralax type="contact" />
    </section>
    <section id='Contact'>
      <Contact />
    </section>
    
  </div>;
};

export default App;
