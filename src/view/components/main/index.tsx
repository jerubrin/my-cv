import About from "../about"
import Courses from "../courses"
import Education from "../education"
import Languages from "../languages"
import Projects from "../projects"
import Skills from "../skills"
import Work from "../work"
import Top from "../top/top"
import './style.scss'

function Main() {
  return (
    <>
      <Top />
      <About />
      <Skills />
      <Languages />
      <Work />
      <div className="two-blocks">
        <Education />
        <Courses />
      </div>
      {/* <Projects /> */}
    </>
  )
}

export default Main