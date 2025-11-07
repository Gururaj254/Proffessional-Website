import AboutMe from "./Components/AboutMe.jsx"
import Education from "./Components/Education.jsx"
import Experience from "./Components/Experience.jsx"
import Footer from "./Components/Footer.jsx"
import Projects from "./Components/Projects.jsx"
import Header from "./Components/Header.jsx"
import Skills from "./Components/Skills.jsx"
import Intrest from "./Components/Intrest.jsx"
import Contact from "./Components/Contact.jsx"
import Summary from "./Components/Summary.jsx"
import Languages from "./Components/Languages.jsx"
export default function App() {
    return (
        <div class = "chain">

          <Header />
          <AboutMe />
          <Contact />
          <img src="/images/image1.jpg" height="500px" width="500px"/>
            <img src="/images/image2.jpg" height="500px" width="500px"/>
            <img src="/images/image4.jpg" height="500px" width="500px"/>
          <Education />
          <Experience />
          <Skills />
          <img src="/images/image8.jpg" height="500px" width="500px"/>
          <img src="/images/image7.jpg" height="500px" width="500px"/>
          <Projects />
          <Summary />
          <Languages />
          <Intrest />
          <Footer />
        </div>
    )
}