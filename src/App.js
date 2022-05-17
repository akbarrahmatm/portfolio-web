import "./style/landingpage.css"
import NavigationBar from "./component/NavigationBar"
import Intro from "./component/Intro"
import Project from "./component/Project"
import Skills from "./component/Skills"
import About from "./component/About"
import Contact from "./component/Contact"
import ContactContent from "./component/ContactContent"


function App() {
  return (

    <div>
      <div className="myBg">
        <NavigationBar />
        <Intro />
      </div>
      <div className="project" id="project">
        <Project />
      </div>
      <div className="skills" id="skills">
        <Skills />
      </div>
      <div className="about" id="about">
        <About />
      </div>
      <div className="contact" id="contact">
        <Contact />
        <ContactContent />
      </div>
    </div>
  );
}

export default App;
