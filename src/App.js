import './App.css';
import Hero from "./Components/hero/Hero"
import Section1 from "./Components/section1/Section"
import Details from "./Components/details/Details"
import Contacts from "./Components/contacts/Contacts"
import Footer from "./Components/footer/Footer"
import CompareBikesMain from './Components/CompareBikesMain'
function App() {
  return (
    <div className="App">
      <Hero />
      <Section1 />
      <h2 class="section-title">Compare Bikes</h2>
      <CompareBikesMain />
      <Details />
      {/* <Contacts />  causing horizentall scroll*/}
      <Footer />
    </div>
  );
}

export default App;
