import About from "./components/About";
import Certificat from "./components/Certificat";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Certificat/>
      <Works />
      <Contact />
    </div>
  );
}
export default App;