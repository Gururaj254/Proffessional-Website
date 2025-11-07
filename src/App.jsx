import AboutMe from "./Components/AboutMe.jsx";
import Education from "./Components/Education.jsx";
import Experience from "./Components/Experience.jsx";
import Footer from "./Components/Footer.jsx";
import Projects from "./Components/Projects.jsx";
import Header from "./Components/Header.jsx";
import Skills from "./Components/Skills.jsx";
import Intrest from "./Components/Intrest.jsx";
import Contact from "./Components/Contact.jsx";
import Summary from "./Components/Summary.jsx";
import Languages from "./Components/Languages.jsx";
import "./App.css"; // <-- link your CSS here

export default function App() {
  return (
    <div className="chain">
      <Header />
      <AboutMe />
      <Contact />

      <div className="image-gallery">
        <img src="./images/image2.jpg" alt="image2" className="responsive-img" />
          <img src="./images/image1.jpg" alt="image1" className="responsive-img" />
        <img src="./images/image4.jpg" alt="image4" className="responsive-img" />
      </div>

      <Education />
      <Experience />
      <Skills />

      <div className="image-gallery">
        <img src="./images/image8.jpg" alt="image8" className="responsive-img" />
        <img src="./images/image7.jpg" alt="image7" className="responsive-img" />
      </div>

      <Projects />
      <Summary />
      <Languages />
      <Intrest />
      <Footer />
    </div>
  );
}
