import './app.scss';
// import Test from './components/Test';
import Banner from './components/banner/Banner';
import Navbar from './components/nabvar/navbar';
import Paralax from './components/paralax/Paralax';
import Portfolio from './components/portfolio/Portfolio';
const App = () => {
  return <div>
    <section id='Home'>
      <Navbar />
      <Banner/>
    </section>
    <section id='Services'>
      <Paralax type="services" />
    </section>
    <section>Services</section>


    <section id='Portfolio'>
      <Paralax type="portfolio" />
    </section>
      <Portfolio /> 
    
    

    <section id='Contact'>
      <Paralax type="contact" />
    </section>
    <section>Contact</section>
    
  </div>;
};

export default App;
