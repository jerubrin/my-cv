import lang from "../../../data/lang"
import skills from "../../../data/skills"
import { useLangStore } from "../../../hooks/lang-state"
import './style.scss'

function Skills() {
  const { lng } = useLangStore();

  return (
    <section className="skills" id="skills">
      <h3 className="skills__title">{lang[lng]["skills"]}</h3>
      <ul className="skills__list">
        {skills.map((skill) => 
          <li
            className={`skills__item skills__item_${skill.id}`}
            style={{ background: `linear-gradient(94.69deg, ${skill.colors[0]} 0%, ${skill.colors[1]} 100%)` }} >
            <div
              className="skills__icon"
              style={{ 
                backgroundImage: `url(${skill.icon})`,
                width: skill.width ? `${skill.width}px` : "33px",
              }} />
            <p className="skills__text">{skill.name}</p>
          </li>
        )}
      </ul>
  </section>
  )
}

export default Skills