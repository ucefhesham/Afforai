import Navbar from './components/Navbar.js';
import AppSumo from './components/AppSumo.js';
import Sections from './components/Sections.js';
import Testmonials from './components/Testmonials.js';
import Footer from './components/Footer.js';
import FAQs from './components/FAQs.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppSumo />
      <Sections />
      <Testmonials />
      <FAQs />
      <Footer />
    </div>
  );
}

export default App;
