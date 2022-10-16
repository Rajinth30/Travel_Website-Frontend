import Carousel from "./Components/Carousel";
import Destinations from "./Components/Destinations";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Search from "./Components/Search";
import Selects from "./Components/Selects";

function App() {
  return (
    <div >
      <Nav />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
