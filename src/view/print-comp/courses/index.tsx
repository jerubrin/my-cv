import contacts from "../../../data/contacts"
import courses from "../../../data/courses";
import lang from "../../../data/lang";
import { useLangStore } from "../../../hooks/lang-state"
import './style.scss'

function PCourses() {
  const { lng } = useLangStore();

  return (
    <div className="p-courses">
      {courses.map((course) =>
        <div className="p-courses__item">
          <div className="p-courses__year">{lang[lng][course.year]}</div>
          <div className="p-courses__right">
            <div className="p-courses__where">{lang[lng][course.where]}</div>
            <div className="p-courses__prof">{lang[lng][course.profession]}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PCourses;
