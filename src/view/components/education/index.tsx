import education from "../../../data/education"
import lang from "../../../data/lang";
import { useLangStore } from "../../../hooks/lang-state"
import './style.scss'

function Education() {
  const { lng } = useLangStore();

  return (
    <section className="education" id="education">
      <h3 className="education__title">{lang[lng]["education"]}</h3>
      <div className="education__list">
        {education.map((educ) =>
          <>
            <div className="education__year">{educ.year}</div>
            <div className="education__right-warpper">
              <div className="education__where">{lang[lng][educ.where]}</div>
              <div className="education__profession">{lang[lng][educ.profession]}</div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Education