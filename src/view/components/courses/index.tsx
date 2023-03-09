import courses from "../../../data/courses"
import lang from "../../../data/lang";
import { useLangStore } from "../../../hooks/lang-state"
import Course from "../course/course";
import './style.scss'

function Courses() {
  const { lng } = useLangStore();

  return (
    <section className="courses" id="courses">
      <h3 className="courses__title">{lang[lng]["courses"]}</h3>
      <div className="courses__list">
        {courses.map((course, i) =>
          <Course url={course.url}>
            <div 
              className={`courses__picture courses__picture_${i+1}`}
              style={{ backgroundImage: `url(${course.picture})` }}
            >
              {course.isNoSetr && <>
              <p className="courses__no-title">{lang[lng]["completed"]}</p>
              <p className="courses__no-description">{lang[lng]["сertificate is pending..."]}</p>
              </>}
            </div>
            <div className="courses__description">
              <div className="courses__where">{course.where}</div>
              <div className="courses__profession">{course.profession}</div>
            </div>
          </Course>
        )}
      </div>
  </section>
  )
}

export default Courses