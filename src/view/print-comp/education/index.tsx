import contacts from "../../../data/contacts"
import education from "../../../data/education";
import lang from "../../../data/lang";
import { useLangStore } from "../../../hooks/lang-state"
import './style.scss'

function PEducation() {
  const { lng } = useLangStore();

  return (
    <div className="p-education">
      {education.map((educat) =>
        <div className="p-education__item">
          <div className="p-education__year">{lang[lng][educat.year]}</div>
          <div className="p-education__right">
            <div className="p-education__where">{lang[lng][educat.where]}</div>
            <div className="p-education__prof">{lang[lng][educat.profession]}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PEducation;
