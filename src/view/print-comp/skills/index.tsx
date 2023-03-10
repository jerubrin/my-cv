import contacts from "../../../data/contacts"
import lang from "../../../data/lang";
import skills from "../../../data/skills";
import { useLangStore } from "../../../hooks/lang-state"
import './style.scss'

function PSkills() {
  const { lng } = useLangStore();

  return (
    <div className="p-skills">
      {skills.map((skill, i) => 
        <div className="p-skills__item" key={i}>
          <img className="p-skills__icon" src={skill.iconBw} width="16px" height="16px" />
          <div className="p-skills__text">{skill.name}</div>
        </div>
      )}
    </div>
  )
}

export default PSkills;
