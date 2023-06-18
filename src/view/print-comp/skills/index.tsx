import skills from "../../../data/skills";
import './style.scss';

function PSkills() {

  return (
    <div className="p-skills">
      {skills.filter((skill) => !skill.hide).map((skill, i) =>
        <div className="p-skills__item" key={i}>
          <img className="p-skills__icon" src={skill.iconBw} width="16px" height="16px" />
          <div className="p-skills__text">{skill.name}</div>
        </div>
      )}
    </div>
  )
}

export default PSkills;
