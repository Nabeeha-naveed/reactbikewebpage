import './App.css';
import Hero from "./Components/hero/Hero"
import Section1 from "./Components/section1/Section"
import CompareBikes from "./Components/compare-bikes/CompareBikes"
import Details from "./Components/details/Details"
import Contacts from "./Components/contacts/Contacts"
import Footer from "./Components/footer/Footer"
function App() {
  return (
    <div className="App">
      <Hero />
      <Section1 />
      <CompareBikes />
      <Details />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
