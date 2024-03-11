import './app.scss';
import Test from './components/Test';
import Navbar from './components/nabvar/navbar';
const App = () => {
  return <div>
    <section id='Home'>
      <Navbar />
    </section>
    <section id='Services'>Peralax</section>
    <section>Services</section>
    <section id='Portfolio'>Peralax</section>
    <section>Portfolio 1</section>
    <section>Portfolio 2</section>
    <section>Portfolio 3</section>
    <section id='Contact'>Contact</section>
    
  </div>;
};

export default App;
